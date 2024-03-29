# fonk-negative-number-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-negative-number-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-negative-number-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-negative-number-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-negative-number-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-negative-number-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-negative-number-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is a negative number

How to install it:

```bash
npm install @lemoncode/fonk-negative-number-validator --save
```

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product: 'shoes',
  price: 20,
}
```

We can add a negativeNumber validation to the myFormValues

```javascript
import { negativeNumber } from '@lemoncode/fonk-negative-number-validator';

const validationSchema = {
  field: {
    price: [negativeNumber.validator],
  },
};
```

The validator must be configured with the following required arguments:

```javascript
export interface CustomValidatorArgs {
  strictTypes?: boolean;
  allowZero?: boolean;
}
```

These are the default arguments:

```javascript
let defaultCustomArgs: CustomValidatorArgs = {
  strictTypes: false,
  allowZero: false,
};
```

You can specify the custom arguments in two ways:

- Locally just customize the arguments for this validationSchema (e.g. We can specify if the validator allows zero):

```javascript
import { negativeNumber } from '@lemoncode/fonk-negative-number-validator';

const validationSchema = {
  field: {
    price: [
      {
        validator: negativeNumber.validator,
        customArgs: { allowZero: true },
      },
    ],
  },
};
```

- Globally, replace the default custom arguments in all validationSchemas (e.g. enable strict types):

```javascript
import { negativeNumber } from '@lemoncode/fonk-negative-number-validator';

negativeNumber.setCustomArgs({ strictTypes: true });
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { negativeNumber } from '@lemoncode/fonk-negative-number-validator';

negativeNumber.setErrorMessage('El campo debe de ser un número negativo');
```

- Locally just override the error message for this validationSchema:

```javascript
import { negativeNumber } from '@lemoncode/fonk-negative-number-validator';

const validationSchema = {
  field: {
    price: [
      {
        validator: negativeNumber.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
