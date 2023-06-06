import { Router } from 'express';
import loginControllers from '../controllers/login.controllers';
import authMiddleware from '../middlewares/auth.middleware';

const loginRouter = Router();

loginRouter.post('/', authMiddleware, loginControllers.login);

export default loginRouter;