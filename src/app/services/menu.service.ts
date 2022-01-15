import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { foodCard, menu, userInfo } from '../food.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  fin:any;

  getDataValues(value:string):Observable<any>{
    return this.http.get('http://localhost:4001/read/'+value);
  };

  signup(username:string,password:string):Observable<any>{
    return this.http.post<userInfo>('http://localhost:4001/signup',{email:username,pass:password},{'headers': new HttpHeaders({'Content-Type':'application/json'})});
  }

  login(username:string,password:string):Observable<any>{
    return this.http.post<userInfo>('http://localhost:4001/login',{email:username,pass:password},{'headers': new HttpHeaders({'Content-Type':'application/json'})});
  }
}
