import jwt, { Secret } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'secret';

interface TokenPayload {
  id: number;
  username: string;
}

function sign(payload: TokenPayload): string {
  return jwt.sign(payload, secret);
}

export default {
  sign,
};
