import jwt from 'jsonwebtoken';

const jwtConfig: object = {
  // expiresIn: '90m',
  algorithm: 'HS256',
};

const secret = 'secret';

const createToken = (data: object): string => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token: string): unknown => jwt.verify(token, secret);

export default { createToken, verifyToken };