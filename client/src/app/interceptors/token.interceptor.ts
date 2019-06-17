import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public apiService: ApiService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.apiService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.apiService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
