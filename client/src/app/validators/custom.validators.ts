import { AbstractControl } from '@angular/forms';

export function bookingCodeValidation(control: AbstractControl) {
  const regex = /^[A-Za-z2-9]*$/;

  if (regex.test(control.value) && control.value !== null) {
    return null;
  } else {
    return { codeInvalid: true };
  }
}
