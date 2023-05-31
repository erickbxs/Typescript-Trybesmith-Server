import CustomError from './custom.error';

export default class RequiredFieldsError extends CustomError {
  constructor(message: string) {
    super(message, 400);

    Object.setPrototypeOf(this, RequiredFieldsError.prototype);
  }
}