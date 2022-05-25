import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public hide: boolean = true;

  public constructor(private authService: AuthService) {}

  public submit(): void {
    this.authService.authorizeUser({
      name: 'Your Name',
      token: `asdasdadsadddfvbabvobhubhoijo2er.
      dajd2j3ro2b2gto3bthyugo12blhuvfu2obfh23uf2fji32fibfihifh2hlifhighgihiugigbifbif.
      d2ij3bfuibq2oifb2fbu2buh2bu3bubu3bfufq2f`,
      refreshToken: 'asdasdadsad',
      message: 'login',
      userId: '123dadasv213',
    });
  }
}
