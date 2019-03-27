import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /*getApi() {
    return this.http.get()
  }*/
  firstClick() {
    console.log('hello');
  }
}
