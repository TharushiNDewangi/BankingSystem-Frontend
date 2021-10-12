import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8019/api/v1/user";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<User[]>{
    console.log("dew")
    console.log(this.httpClient.get<User[]>(`${this.baseURL}`))
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createEmployee(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getEmployeeById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
