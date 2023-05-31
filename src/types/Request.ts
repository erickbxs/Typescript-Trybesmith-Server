import { Request } from 'express';
import { User } from './User';

/*
  | REFERENCES |
  link: https://www.kindacode.com/article/express-typescript-extending-request-and-response-objects/
*/

export interface ICustomRequest extends Request {
  user?: User;
}
