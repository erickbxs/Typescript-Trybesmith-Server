import { NextFunction, Request, Response } from 'express';
import authtoken from './authToken.middleware';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  } 
  try {
    authtoken.verifyToken(authorization);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default { validateJWT };