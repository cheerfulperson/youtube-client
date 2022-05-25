import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      route.routeConfig?.path === 'login' ||
      route.routeConfig?.path === 'registration'
    ) {
      return !this.auth.isUserAuthorized;
    }
    if (!this.auth.isUserAuthorized) {
      this.router.navigateByUrl('auth/login');
    }
    return this.auth.isUserAuthorized;
  }
}
