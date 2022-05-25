import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.scss'],
})
export class LoginInformationComponent {
  @Input() public isUserAuth: boolean = false;

  @Input() public name: string = '';

  public constructor(private authSerice: AuthService) {}

  public logout(): void {
    this.authSerice.logout();
  }
}
