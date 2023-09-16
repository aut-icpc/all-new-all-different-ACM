import {Component, ElementRef, Input, OnInit, SimpleChanges} from '@angular/core';
import * as Leaflet from "leaflet";
import {ContactUsDto} from "../../interfaces/DTO/contactUs.dto";
import {fadeInAnimation} from "../../animations/fade-animations";


@Component({
  selector: 'acpc-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [fadeInAnimation],
})
export class MapComponent implements OnInit {
  @Input() longitude: number | undefined
  @Input() latitude: number | undefined
  @Input() zoom: number = 17;
  @Input() contactData!: ContactUsDto

  isFullscreen: boolean = false;
  isMapLoaded = false;
  _options: Leaflet.MapOptions = {};
  showMap = false

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (this.longitude != null && this.latitude != null) {
        this.showMap = true
        this.updateMapOptions({
          longitude: this.longitude,
          latitude: this.latitude,
          zoom: this.zoom,
        })
      }
    }
  }

  ngOnInit(): void {
    this.updateMapOptions({
      zoom: this.zoom,
    })
  }

  toggleFullscreen() {
    const mapElement = this.el.nativeElement.querySelector(".map-container") as HTMLElement
    console.log("pressed")
    if (!this.isFullscreen) {
      if (mapElement.requestFullscreen) {
        mapElement.requestFullscreen()
        // @ts-ignore
      } else if (mapElement.mozRequestFullScreen) {
        // @ts-ignore
        mapElement.mozRequestFullScreen()
        // @ts-ignore
      } else if (mapElement.webkitRequestFullscreen) {
        // @ts-ignore
        mapElement.webkitRequestFullscreen()
        // @ts-ignore
      } else if (mapElement.msRequestFullscreen) {
        // @ts-ignore
        mapElement.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        // @ts-ignore
      } else if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen();
        // @ts-ignore
      } else if (document.webkitExitFullscreen) {
        // @ts-ignore
        document.webkitExitFullscreen();
        // @ts-ignore
      } else if (document.msExitFullscreen) {
        // @ts-ignore
        document.msExitFullscreen();
      }
    }

    this.isFullscreen = !this.isFullscreen
  }

  private updateMapOptions({
                             longitude = this.longitude,
                             latitude = this.latitude,
                             zoom = this.zoom,
                           }
  ) {
    if (!longitude || !latitude) {
      this.options = {
        zoom: zoom,
      }
      return;
    }

    this.options = {
      zoom: zoom,
      layers: getLayers(latitude, longitude),
      center: new Leaflet.LatLng(latitude, longitude)
    }
  }

  get options() {
    return this._options
  }

  set options(options: Leaflet.MapOptions) {
    this._options = {...options}
  }


  onMapReady() {
    setTimeout(() => {
      this.isMapLoaded = true;
      // @ts-ignore
    }, 1500);
  }

}

const getMarkers = (latitude: number, longitude: number): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(latitude, longitude), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [23, 51],
        iconUrl: 'assets/blue-marker.svg',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
    new Leaflet.Marker(new Leaflet.LatLng(latitude, longitude), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [23, 51],
        iconUrl: 'assets/red-marker.svg',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};

const getRoutes = (latitude: number, longitude: number): Leaflet.Polyline[] => {
  return [
    new Leaflet.Polyline([
      new Leaflet.LatLng(latitude, longitude),
      new Leaflet.LatLng(latitude, longitude),
    ] as Leaflet.LatLng[], {
      color: '#0d9148'
    } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};

const getLayers = (latitude: number, longitude: number): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Amirkabir University of Technology'
    } as Leaflet.TileLayerOptions),
    ...getMarkers(latitude, longitude),
    ...getRoutes(latitude, longitude),
    ...getPolygons(latitude, longitude)
  ] as Leaflet.Layer[];
};

const getPolygons = (latitude: number, longitude: number): Leaflet.Polygon[] => {
  return [
    new Leaflet.Polygon([
        new Leaflet.LatLng(latitude, longitude),
        new Leaflet.LatLng(latitude, longitude),
        new Leaflet.LatLng(latitude, longitude),
        new Leaflet.LatLng(latitude, longitude)
      ] as Leaflet.LatLng[],
      {
        fillColor: '#eb530d',
        color: '#eb780d'
      } as Leaflet.PolylineOptions)
  ] as Leaflet.Polygon[];
};
