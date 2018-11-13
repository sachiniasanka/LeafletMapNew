
export class Location {
  id:string;
  lat: string;
  lng:string;
  public constructor(lat:string,lng:string) {
    this.lat = lat;
    this.lng = lng;
    console.log("dtoLo");
    console.log(lng);
    console.log(lat);



  }

}
