import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service'

const ORDER_REQUESTS_API = 'https://stock-inv.herokuapp.com/v1/product/view-requests/';

const APPROVE_REQUEST_API = "https://stock-inv.herokuapp.com/v1/product/request/approve/";
const DECLINE_REQUEST_API = "https://stock-inv.herokuapp.com/v1/product/request/decline/";
const PAYED_PRODUCTS_API = "https://stock-inv.herokuapp.com/v1/product/status/paid/";
const NOTPAYED_PRODUCTS_API ="https://stock-inv.herokuapp.com/v1/product/status/unpaid/"
@Injectable({
  providedIn: 'root'
})
export class OrderRequestService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
  getOrderRequests():Observable<any>{
    return this.http.get(ORDER_REQUESTS_API, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }
  approveOderRequests(itemName: string):Observable<any>{
    return this.http.post(`${APPROVE_REQUEST_API}${itemName}/`,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }
  declineOderRequests(itemName: string):Observable<any>{
    return this.http.delete(`${DECLINE_REQUEST_API}${itemName}/`,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }
  payedProducts():Observable<any>{
    return this.http.get(PAYED_PRODUCTS_API,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }
  notPayedProducts():Observable<any>{
    return this.http.get(NOTPAYED_PRODUCTS_API,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }


  }
