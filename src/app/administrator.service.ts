import { HttpClient,HttpHeaders, HttpBackend  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {map}from 'rxjs/operators'
import { TokenStorageService } from "./_services/token-storage.service"
import { AuthInterceptor } from './interceptor/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  // private _url:string="assets/users.json"

  authToken: any;

  // admin -clerks -endpoints
  url='https://stock-inv.herokuapp.com/v1/account/delete/'
  urla='https://stock-inv.herokuapp.com/v1/account/activate/'
  urlb='https://stock-inv.herokuapp.com/v1/account/inactivate/'
  constructor(private http:HttpClient) { }
  
// merchant-admin-endpoint
urlActivate='https://stock-inv.herokuapp.com/v1/account/activate/'
urlDeactivate='https://stock-inv.herokuapp.com/v1/account/inactivate/'
urlDelete='https://stock-inv.herokuapp.com/v1/account/delete/'

  ngOnInit(): void {
    
    this.getData();

  }
  

  onAddClerk(postData:{username:string,full_name:string, email:string,business:string,avatar:string,password:string, password2:string}){
    // send Http request to
    this.http.post('https://stock-inv.herokuapp.com/v1/account/register-clerk/',
    postData
    ).subscribe(responseData =>{
      console.log(responseData)
    })
      };
 
  
 
  getData(){

    return this.http.get('https://stock-inv.herokuapp.com/v1/account/view-clerks/',)
  }
 
  getAdmin(){

    return this.http.get(' https://stock-inv.herokuapp.com/v1/account/view-admins/',)
  }
  deleteClerk(id:string){
    return this.http.delete(this.url+id+'/')
  }

  activateClerk(id:string){
    return this.http.post(this.urla+id+'/',id)
  }

  inactivateClerk(id:string){
    return this.http.post(this.urlb+id+'/',id)
  }

// merchant-admin-action -sevice
  deleteAdmin(id:string){
    return this.http.delete(this.urlDelete+id+'/')
  }

  activateAdmin(id:string){
    return this.http.post(this.urlActivate+id+'/',id)
  }

  inactivateAdmin(id:string){
    return this.http.post(this.urlDeactivate+id+'/',id)
  }

}
