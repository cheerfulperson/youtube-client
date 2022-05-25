import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddCard } from 'src/app/redux/actions/card.action';
import { IAppState } from 'src/app/redux/states/app.state';
import { MyErrorStateMatcher } from 'src/app/shared/error-state-matcher.model';
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
  });

  get title(): AbstractControl {
    return this.cardFormControl.get('title') as AbstractControl;
  }

  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  public getInputControl(name: string): AbstractControl {
    return this.cardFormControl.get(name) as AbstractControl;
  }

  public constructor(private store: Store) {}

  public submit(): void {
    if (this.cardFormControl.invalid) return;

    (<Store<IAppState>>this.store).dispatch(
      new AddCard({
        id: 'adasdgrwr',
        ...this.cardFormControl.value,
        date: new Date(),
      })
    );

    this.cardFormControl.setValue({
      title: '',
      description: '',
      imageLink: '',
      videoLink: '',
    });
  }
}
