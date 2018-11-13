import {Component,  OnInit, ViewChild} from '@angular/core';
import {Location1Service} from "../Location1Service";
import {NgForm} from "@angular/forms";
import {MyService} from "../MyService";
import {HttpClient} from "@angular/common/http";
import {MyDTO} from "../my-dto";
import {map} from "rxjs/operator/map";



declare let L;
function newClick(lat: string, long : string) {
  console.log("setting data");
  console.log("outside");
  ViewLocationsComponent.dtoGlobe = new MyDTO(lat,long);
}
@Component({
  selector: 'app-view-locations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.css'],
})
export class ViewLocationsComponent implements OnInit {

  public static service1 : any;
  public static dtoGlobe : MyDTO;
  public static self : ViewLocationsComponent;
  public static marker : any;
  public static map :any;
// public static coodinateService : any;
  public  static pointers : any;
  // public static coodinates : MyDTO[];


  coodinates: Array<MyDTO> = [];

  coodinatesService : Array<MyService> =[];
  @ViewChild("frmLocations") frmLocations: NgForm;

  constructor(private locationService: Location1Service, public http : HttpClient, private service:MyService) {
    ViewLocationsComponent.service1 =  this.service;
    ViewLocationsComponent.self = this;
    // ViewLocationsComponent.dto = this.coodinates;
    ViewLocationsComponent.map = this;
    ViewLocationsComponent.marker = this;


  }
  ngOnInit() {

    this.update();
    this.loadAllCoodinates();
    this.viewAll();
    // this.showAllMarkers();

  }
  loadAllCoodinates(): void {
    this.service.getAllCoodinates()
      .subscribe(
        (result) => {
          this.coodinates = result;

          console.log("load all coordinate :"+this.coodinates);
        }
      )
  }


showAllMarkers(){
//
// //   // for (var i = 0; i < this.mrkrs.length; i++) {
// //   //   marker = new L.marker([this.mrkrs[i][1],this.mrkrs[i][2]])
// //   //     .bindPopup(this.mrkrs[i][0])
// //   //     .addTo(map);
// //   // }
// // //
//
//   var dto;
//   var showCoodinates : this.coodinateService;
//   for(dto = 0;dto <this.coodinates.length;dto++){
//       var viewAllMarkers = new L.marker([this.coodinates[dto].lat, this.coodinates[dto].lng]);
//     marker.push(viewAllMarkers);
//       map.addLayer(viewAllMarkers[dto]);
//     }
//

//
}



  deleteCoodinate(coodinate: MyDTO): void {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.service.deleteCoodinate(coodinate.id).subscribe(
        (result) => {
          if (result) {
            alert("Coodinate has been deleted successfully");
          } else {
            alert("Failed to delete the coodinate");
          }
          this.loadAllCoodinates();
        }
      )
    }
  }
update(): void{
  const  map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  var marker ;
  // var items = [{"lat":"51.000","lon":"13.000"},{"lat":"52.000","lon":"13.010"},{"lat":"52.000","lon":"13.020"}];
  // function itemWrap() {
  //   for(var i=0;i<items.length;i++){
  //     var LamMarker = new L.marker([items[i].lat, items[i].lon]);
  //     marker.push(LamMarker);
  //     map.addLayer(marker[i]);
  //   }
  // }

  map.on('click', function (e){
  console.log("map on");

  var lati = e.latlng.lat;
  var long = e.latlng.lng;

   marker = new L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
  marker.bindPopup("Lattitude : "+lati +"</br>"+"Longitude : "+long).openPopup();
  console.log("lati :"+lati + " "+"long :"+long);
  newClick(lati,long);
  // viewAll();
  //holdLatLong();
  console.log("service call");
  ViewLocationsComponent.self.service.holdLatLong(ViewLocationsComponent.dtoGlobe.lat,ViewLocationsComponent.dtoGlobe.lng)
    .subscribe(responce => {

      console.log("response :"+responce);
    });
});
}

    viewAll():void{
    // var coodi = this.coodinatesService;
    // console.log("coodi :"+coodi);
    //   var dto;
    //   for (dto = 0;dto <coodi.length;dto++){
    //   console.log("dto :"+dto);
    //   var viewAllMarkers = new L.markers([coodinatesService[dto].lat, coodi[dto].lng]);
    //   ViewLocationsComponent.marker.push(viewAllMarkers);
    //   ViewLocationsComponent.map.addLayer(viewAllMarkers[dto]);
    // }
  }
}
























