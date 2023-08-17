import {Component, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import {ContactUsDto} from "../shared/interfaces/DTO/contactUs.dto";
import {HttpService} from "../shared/services/http.service";
import {BaseResponseDto} from "../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../shared/api-urls";

@Component({
  selector: 'acpc-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit{

contactData!: ContactUsDto;

  options!: Leaflet.MapOptions;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<ContactUsDto>>(API_URLS.CONTACT_US)
      .subscribe(response => {
        this.contactData = response.result;
        this.options = {
          layers: getLayers(this.contactData.universityCoordinate.x, this.contactData.universityCoordinate.y),
          zoom: 17,
          center: new Leaflet.LatLng(this.contactData.universityCoordinate.x, this.contactData.universityCoordinate.y)
        };
      });
  }

}

export const getMarkers = (latitude: number, longitude: number): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(latitude,longitude), {
      icon: new Leaflet.Icon({
        iconSize: [60, 51],
        iconAnchor: [23, 51],
        iconUrl: 'assets/blue-marker.svg',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
    new Leaflet.Marker(new Leaflet.LatLng(latitude,longitude), {
      icon: new Leaflet.Icon({
        iconSize: [60, 51],
        iconAnchor: [23, 51],
        iconUrl: 'assets/red-marker.svg',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};

export const getRoutes = (latitude: number, longitude: number): Leaflet.Polyline[] => {
  return [
    new Leaflet.Polyline([
      new Leaflet.LatLng(latitude,longitude),
      new Leaflet.LatLng(latitude,longitude),
    ] as Leaflet.LatLng[], {
      color: '#0d9148'
    } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};

export const getLayers = (latitude: number, longitude: number): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    ...getMarkers(latitude, longitude),
    ...getRoutes(latitude, longitude),
    ...getPolygons(latitude, longitude)
  ] as Leaflet.Layer[];
};

export const getPolygons = (latitude: number, longitude: number): Leaflet.Polygon[] => {
  return [
    new Leaflet.Polygon([
        new Leaflet.LatLng(latitude,longitude),
        new Leaflet.LatLng(latitude,longitude),
        new Leaflet.LatLng(latitude,longitude),
        new Leaflet.LatLng(latitude,longitude)
      ] as Leaflet.LatLng[],
      {
        fillColor: '#eb530d',
        color: '#eb780d'
      } as Leaflet.PolylineOptions)
  ] as Leaflet.Polygon[];
};
