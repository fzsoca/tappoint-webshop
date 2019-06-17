import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { tap } from 'rxjs/operators';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public apiService: ApiService, private matDialog: MatDialog) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.apiService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.apiService.getToken()}`
        }
      });
    }

    return next.handle(request).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.matDialog.open(AlertModalComponent, {
            width: '400px',
            height: '200px',
            data: err.error.error
          })

        }
      }
    ));

  }
}
