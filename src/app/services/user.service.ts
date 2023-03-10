import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/api/users")
  }

  getUserById(id: number):Observable<User>{
    return this.httpClient.get<User>("http://localhost:3000/api/users/"+id)
  }
}
