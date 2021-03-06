import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { usersFromSearch } from '../model/usersFromSearch';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseURL : string = `${environment.api_url}/api/search`

  constructor(private httpClient:HttpClient) { }

  searchUsers(text : string, proficient : string) : Observable<usersFromSearch> {
    let params = new HttpParams()
      .set('text', text)
      .set('proficient', proficient)
    return this.httpClient.get<usersFromSearch>(this.baseURL, { params : params })
  }
}
