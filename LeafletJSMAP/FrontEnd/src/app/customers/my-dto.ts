import {MyService} from "./MyService";

export class MyDTO {
  id:string;
  lat:string;

  lng:string;

  // constructor(){}
  constructor(lat: string, lng: string){
    // this.id='4';
    this.lat = lat;
    this.lng = lng;
    console.log("myDTO"+"lat :"+lat+" "+"long :"+lng);

  }




}
