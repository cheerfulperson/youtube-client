import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserAuthData } from '../models/user-auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthDataSource = new Subject<UserAuthData | undefined>();

  public userAuthData$ = this.userAuthDataSource.asObservable();

  private userAuthData?: UserAuthData;

  public isUserAuthorized: boolean = false;

  public constructor(private router: Router) {}

  public static getLocalUserData(): UserAuthData | null {
    const JSONdata: string | null = localStorage.getItem('userData');
    return JSONdata ? (JSON.parse(JSONdata) as UserAuthData) : null;
  }

  public reauthorizeUser(): void {
    const data: UserAuthData | null = AuthService.getLocalUserData();
    if (data) {
      this.authorizeUser(data);
    }
  }

  public authorizeUser(authData: UserAuthData): void {
    this.isUserAuthorized = true;
    this.updateUSerData(authData);
    this.router.navigateByUrl('');
  }

  public logout(): void {
    this.isUserAuthorized = false;
    this.clearAllData();
    this.router.navigateByUrl('auth/login');
  }

  private clearAllData(): void {
    this.userAuthData = undefined;
    this.userAuthDataSource.next(undefined);
    localStorage.removeItem('userData');
  }

  private updateUSerData(authData: UserAuthData): void {
    const data: UserAuthData = authData;
    data.time = new Date();

    this.userAuthData = data;
    this.userAuthDataSource.next(data);

    this.saveUserData();
  }

  private saveUserData(): void {
    localStorage.setItem('userData', JSON.stringify(this.userAuthData));
  }
}
