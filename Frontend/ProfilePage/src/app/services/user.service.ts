import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL : string = "http://localhost:3000/api/user"

  constructor(private httpClient:HttpClient) { }

  getUser(useId : string) : Observable<User> {
    let params = new HttpParams().set('id', useId)
    return this.httpClient.get<User>(this.baseURL, { params : params })
  }
}
