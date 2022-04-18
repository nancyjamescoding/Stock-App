import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://stock-inv.herokuapp.com/v1/account/';

const registerHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const loginHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const deleteClerkHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const registerClerkHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const registerAdminHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,handler: HttpBackend) {  this.http = new HttpClient(handler);}

  login( email:string , password: string):Observable<any>{
    return this.http.post(`${AUTH_API}login/`, {
      username: email,
      password
    }, loginHttpOptions);
  }

  register(username: string,  full_name:string, email: string, business:string,avatar:string, password: string, password2:string): Observable<any> {
    return this.http.post(`${AUTH_API}register/`, {
      username,
      full_name,
      email,
      business,
      avatar,
      password,
      password2,
      
    }, registerHttpOptions);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  auth: any;

  constructor(private http: HttpClient) {}
  registerClerk(username: string,  full_name:string, email: string, business:string,avatar:string, password: string, password2:string): Observable<any> {
    return this.http.post(`${AUTH_API}register-clerk/`, {
      username,
      full_name,
      email,
      business,
      avatar,
      password,
      password2,
      
    }, registerClerkHttpOptions);
  }
 

  registerAdmin(username: string,  full_name:string, email: string, business:string,avatar:string, password: string, password2:string): Observable<any> {
    return this.http.post(`${AUTH_API}register/`, {
      // username,
      // full_name,
      // email,
      // business,
      // avatar,
      // password,
      // password2,
      
    }, registerAdminHttpOptions);
  }

  
  deleteClerk(username: string,  full_name:string, email: string, business:string,avatar:string, password: string, password2:string): Observable<any> {
    return this.http.post(`${AUTH_API}delete/<str:id>/`, {
      
    }, deleteClerkHttpOptions);
  }
  


}