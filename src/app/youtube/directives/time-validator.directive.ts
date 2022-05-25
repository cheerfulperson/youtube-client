import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appTimeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TimeValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeValidatorDirective {
  public static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (new Date(control.value).getTime() <= Date.now()) {
        return {
          timeError: 'an entered date should now be in the future',
        };
      }
      return null;
    };
  }
}
