import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import {  Injector } from '@angular/core';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';

// export const InterceptorSkipHeader = 'X-Skip-Interceptor';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  
  constructor(private inject: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    // if (request.headers.has(InterceptorSkipHeader)) {
    //   const headers = request.headers.delete(InterceptorSkipHeader);
    //   return next.handle(request.clone({ headers }));
    // }

    
    let authServic=this.inject.get(TokenStorageService)
    // if(authServic){

      let authToken = request.clone({
      setHeaders:{
        Authorization: "Token "+authServic.getToken()
      }});
      console.log(authToken)
      console.log(authServic)
    return next.handle(authToken)
    // .pipe(
    //   catchError((err:HttpErrorResponse)=>{
    //     if (err.status === 401){
    //       alert("error is 401")
    //     }
    //     if(err.status ===404){
    //       alert("error is 404")
    //     }
    //     return throwError(()=>new Error ('ERROR ERR'));
    //   })
    // );
    }
    // else{return next.handle(request)

    // }
    
    
  // }
}
