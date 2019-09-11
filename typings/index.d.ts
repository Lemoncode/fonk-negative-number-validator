import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace negativeNumber {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
