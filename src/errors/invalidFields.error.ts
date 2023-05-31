import CustomError from './custom.error';

export default class InvalidFieldsError extends CustomError {
  constructor(message: string) {
    super(message, 422);

    Object.setPrototypeOf(this, InvalidFieldsError.prototype);
  }
}