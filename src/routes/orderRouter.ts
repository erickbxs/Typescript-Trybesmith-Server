import { Router } from 'express';
import orderControllers from '../controllers/order.controllers';
import authMiddleware from 'src/middlewares/auth.middleware';

const orderRouter = Router();

orderRouter.get('/', orderControllers.getAll);
orderRouter.post('/', authMiddleware, orderControllers.get)

export default orderRouter;