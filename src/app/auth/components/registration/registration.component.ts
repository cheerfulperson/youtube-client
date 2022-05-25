import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/error-state-matcher.model';
import { AuthService } from '../../services/auth.service';
import { CustomPswValidatorDirective } from '../../shared/custom-psw-validator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  public loginFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      CustomPswValidatorDirective.getCustomError(),
    ]),
  });

  public hide: boolean = true;

  public get emailControl(): AbstractControl {
    return this.loginFormGroup.get('email') as AbstractControl;
  }

  public get passwordControl(): AbstractControl {
    return this.loginFormGroup.get('password') as AbstractControl;
  }

  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  public constructor(private authService: AuthService) {}

  public submit(): void {
    if (this.loginFormGroup.invalid) return;

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
