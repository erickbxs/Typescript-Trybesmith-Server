import { Router } from 'express';
import validateJWTMiddleware from '../middlewares/validateJWT.middleware';
import validateUserIdMiddleware from '../middlewares/validateUserId.middleware';
import orderControllers from '../controllers/order.controllers';

const orderRouter = Router();

orderRouter.get('/', orderControllers.getAll);

orderRouter.post(
  '/', 
  validateJWTMiddleware.validateJWT,
  validateUserIdMiddleware.validateProductIds,
  validateUserIdMiddleware.validateUserId,
  orderControllers.get,
);

export default orderRouter;
