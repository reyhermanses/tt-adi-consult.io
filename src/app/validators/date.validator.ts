import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function birthDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const today = new Date();
    const birthDate = new Date(value);

    return birthDate > today ? { birthDateInvalid: true } : null;
  };
}
