import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  public apiKey: string = environment.apiKey;

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqInfo = req.clone({
      params: req.params.set('key', this.apiKey),
    });

    return next.handle(reqInfo);
  }
}
