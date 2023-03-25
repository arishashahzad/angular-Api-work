import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  private apiurl="https://aptechapi.000webhostapp.com/User"

  constructor(private httpsclient:HttpClient) { }
  httpsOption={
    headers:new HttpHeaders({
      'Content-Type':'applicatio/json'
    })
  }

  getAll():Observable<any>{
    return this.httpsclient.get(this.apiurl+"read.php")
  }
}
