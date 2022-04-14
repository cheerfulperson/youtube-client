import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appCustomPswValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomPswValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomPswValidatorDirective {
  public static getCustomError(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < 8) {
        return {
          customError: { value: `at least 8 characters` },
        };
      }
      if (!/(?=.*[a-z])(?=.*[A-Z])/.test(control.value)) {
        return {
          customError: {
            value: `a mixture of both uppercase and lowercase letters`,
          },
        };
      }
      if (!/(?=.*[A-Za-z])(?=.*\d)/.test(control.value)) {
        return {
          customError: { value: `a mixture of letters and numbers` },
        };
      }
      if (!/(?=.*[@$!%*#?&])/.test(control.value)) {
        return {
          customError: {
            value: `inclusion of at least one special character, e.g., ! @ # ?`,
          },
        };
      }
      return null;
    };
  }
}
