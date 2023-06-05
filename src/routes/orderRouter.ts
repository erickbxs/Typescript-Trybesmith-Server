import { Router } from 'express';
import orderControllers from '../controllers/order.controllers';

const orderRouter = Router();

orderRouter.get('/', orderControllers.listProducts);

export default orderRouter;