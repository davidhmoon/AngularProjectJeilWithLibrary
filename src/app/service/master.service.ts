import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../Model/Hotel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiurl="https://my-json-server.typicode.com/davidhmoon/30-object-repository/test";

  constructor(private http:HttpClient) { }

  GetHotel():Observable<Hotel>{
    return this.http.get<Hotel>(this.apiurl);
  }
}
