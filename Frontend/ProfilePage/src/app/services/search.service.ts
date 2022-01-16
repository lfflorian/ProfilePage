import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseURL : string = "http://localhost:3000/api/search"

  constructor(private httpClient:HttpClient) { }

  searchUsers(text : string, proficient : string) : Observable<any> {
    let params = new HttpParams()
      .set('text', text)
      .set('proficient', proficient)
    return this.httpClient.get<any>(this.baseURL, { params : params })
  }
}
