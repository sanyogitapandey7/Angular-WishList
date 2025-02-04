import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="https://localhost:7046/api/User/";
  constructor(private http:HttpClient) { }

  signUp(userObj:any){
    this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  login(loginObj:any):any{
    this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
}
