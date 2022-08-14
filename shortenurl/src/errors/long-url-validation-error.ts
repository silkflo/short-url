import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class LongUrlValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('URL Invalid');
    //because is extending a built in class
    Object.setPrototypeOf(this, LongUrlValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
