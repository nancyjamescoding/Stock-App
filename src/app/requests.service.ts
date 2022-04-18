import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

const addHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const requestHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClient) { }


}
