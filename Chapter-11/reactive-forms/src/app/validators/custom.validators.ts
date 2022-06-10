import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkHasNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const error = /\d/.test(control.value);
      return error ? {hasNumbers: {value: control.value}} : null;
    };
}