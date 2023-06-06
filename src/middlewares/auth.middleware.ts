import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  } 

  console.log(req.body);
  next();
};

export default authMiddleware;
