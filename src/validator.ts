import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
} from '@lemoncode/fonk';

const VALIDATOR_TYPE = 'NEGATIVE_NUMBER';

let defaultMessage = 'The value must be a negative number';
export const setErrorMessage = message => (defaultMessage = message);

const defaultCustomArgs: CustomValidatorArgs = {
  allowZero: false,
};

const validateType = value => typeof value === 'number';

const validate = (value, args: CustomValidatorArgs) =>
  args.allowZero ? value <= 0 : value < 0;

const isDefined = value => value !== void 0 && value !== null && value !== '';

interface CustomValidatorArgs {
  allowZero?: boolean;
}

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const {
    value,
    message = defaultMessage,
    customArgs = defaultCustomArgs,
  } = fieldValidatorArgs;

  const args: CustomValidatorArgs = {
    ...defaultCustomArgs,
    ...customArgs,
  };

  const succeeded =
    !isDefined(value) || (validateType(value) && validate(value, args));

  return {
    succeeded,
    message: succeeded
      ? ''
      : parseMessageWithCustomArgs(message as string, args),
    type: VALIDATOR_TYPE,
  };
};
