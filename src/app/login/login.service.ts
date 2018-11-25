import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginData} from '../login-data'
import { RegisterData } from '../register-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,  private router: Router,
		) { }

	login(email,password): Observable<any> {
    let data : LoginData = new LoginData(email,password);
    console.log(data);
    return this.http.post<any>('http://18.197.19.50:8081/login',data)
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  register(email,password,name,phone){
    let data : RegisterData = new RegisterData(email,password,name,phone);
    return this.http.post<any>('http://18.197.19.50:8081/register',data)

  }
}
