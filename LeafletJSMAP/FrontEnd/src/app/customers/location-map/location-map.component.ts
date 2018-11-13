import { Component, OnInit } from '@angular/core';

declare let L;

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {


  map : number;
  constructor() { }

  ngOnInit() {


    this.map= L.map('map').setView([40.91,-96.63],4);

    this.map = L.map('click', function (e)

    {
      var lati = e.latlng.lat;

      var long = e.latlng.lng;

      console.log(lati.value);
      alert(lati+"  "+long);
      var marker = new L.marker([e.latlng.lat,e.latlng.lng]).addTo(this.map).mouseClick.bind(null , lati , long);
      marker.bindPopup("marker").openPopup().onEvent( MouseEvent);
    });


  }

}
