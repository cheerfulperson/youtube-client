import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/error-state-matcher.model';
import { TimeValidatorDirective } from '../../directives/time-validator.directive';
import regUriPattern from './shared/reg-exp-patterns.json';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent {
  public regularUriPattern: string = regUriPattern.pattern;

  public cardFormControl: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    imageLink: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regularUriPattern),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regularUriPattern),
    ]),
    date: new FormControl('', [
      Validators.required,
      TimeValidatorDirective.validate(),
    ]),
  });

  get title(): AbstractControl {
    return this.cardFormControl.get('title') as AbstractControl;
  }

  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  public getInputControl(name: string): AbstractControl {
    return this.cardFormControl.get(name) as AbstractControl;
  }
}
