import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getJoke():Observable<any>{
    return this.http.get("https://official-joke-api.appspot.com/jokes/programming/random")
    // throw new Error;
  }
}
