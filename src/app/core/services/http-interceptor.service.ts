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
    const url: string = req.url[0] === '/' ? req.url : `/${req.url}`;
    const reqInfo = req.clone({
      url: `https://www.googleapis.com/youtube/v3${url}`,
      params: req.params.set('key', this.apiKey),
    });

    return next.handle(reqInfo);
  }
}
