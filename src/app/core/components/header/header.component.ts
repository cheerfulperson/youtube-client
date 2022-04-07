import { Component, OnInit } from '@angular/core';
import { UserAuthData } from 'src/app/auth/models/user-auth-data.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isFilterBlockHidden: boolean = true;

  public userAuthData: UserAuthData | undefined;

  public isUserAuthorized: boolean = false;

  public constructor(private authSerivice: AuthService) {
    this.authSerivice.userAuthData$.subscribe(
      (data: UserAuthData | undefined) => {
        this.userAuthData = data;
        this.isUserAuthorized = this.authSerivice.isUserAuthorized;
      }
    );
  }

  public ngOnInit(): void {
    this.authSerivice.reauthorizeUser();
    this.isUserAuthorized = this.authSerivice.isUserAuthorized;
  }

  public changeFilterBlockhidden(e: boolean): void {
    this.isFilterBlockHidden = e;
  }
}
