import { Component, OnInit, ViewChild } from '@angular/core';
import * as Leaflet from 'leaflet';
import { HeaderOptionClass } from "../shared/enums/header-option-class";

@Component({
  selector: 'acpc-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {

  leafletMap!: Leaflet.Map;

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 17,
    center: new Leaflet.LatLng(35.70385,51.40833)
  };

  headerTextColor = HeaderOptionClass;


  constructor() { }

  ngOnInit(): void {

  }

}

export const getMarkers = (): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(35.70385,51.40833), {
      icon: new Leaflet.Icon({
        iconSize: [60, 51],
        iconAnchor: [23, 51],
        iconUrl: 'assets/blue-marker.svg',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
    new Leaflet.Marker(new Leaflet.LatLng(35.70385,51.40833), {
      icon: new Leaflet.Icon({
        iconSize: [60, 51],
        iconAnchor: [23, 51],
        iconUrl: 'assets/red-marker.svg',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};

export const getRoutes = (): Leaflet.Polyline[] => {
  return [
    new Leaflet.Polyline([
      new Leaflet.LatLng(35.70385,51.40833),
      new Leaflet.LatLng(35.70385,51.40833),
    ] as Leaflet.LatLng[], {
      color: '#0d9148'
    } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};

export const getLayers = (): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    ...getMarkers(),
    ...getRoutes(),
    ...getPolygons()
  ] as Leaflet.Layer[];
};

export const getPolygons = (): Leaflet.Polygon[] => {
  return [
    new Leaflet.Polygon([
        new Leaflet.LatLng(35.70385,51.40833),
        new Leaflet.LatLng(35.70385,51.40833),
        new Leaflet.LatLng(35.70385,51.40833),
        new Leaflet.LatLng(35.70385,51.40833)
      ] as Leaflet.LatLng[],
      {
        fillColor: '#eb530d',
        color: '#eb780d'
      } as Leaflet.PolylineOptions)
  ] as Leaflet.Polygon[];
};