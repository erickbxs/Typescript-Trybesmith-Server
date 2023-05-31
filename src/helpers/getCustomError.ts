import { ValidationError } from 'joi';
import InvalidFieldsError from '../errors/invalidFields.error';
import RequiredFieldsError from '../errors/requiredFields.error';
import CustomError from '../errors/custom.error';

const getCustomError = (error: ValidationError): CustomError => {
  const { type, message } = error.details[0];

  switch (type) {
    case 'any.required':
      return new RequiredFieldsError(message);
    default:
      return new InvalidFieldsError(message);
  }
};

export default getCustomError;