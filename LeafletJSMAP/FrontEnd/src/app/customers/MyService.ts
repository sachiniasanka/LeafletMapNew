
import {HttpClient, HttpHandler} from "@angular/common/http";
import { MyDTO} from "./my-dto";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/location1";

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {

  }
  deleteCoodinate(id: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
  }
  getAllCoodinates(): Observable<Array<MyDTO>> {
    return this.http.get<Array<MyDTO>>(MAIN_URL + URL);
  }
  holdLatLong(lat: string, long: string): Observable<boolean> {
    const dto = new MyDTO(lat,long);
    console.log(dto);
    return this.http.post<boolean>(MAIN_URL + URL, dto);
  }

}



















