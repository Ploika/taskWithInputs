import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constans';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(`${urls.users}`)
  }
  save(user: IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(`${urls.users}`, user)
  }
}
