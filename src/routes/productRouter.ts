import { Router } from 'express';
import ProductController from '../controllers/product.controllers';
import validateProduct from '../middlewares/product.middleware';

const productRouter = Router();

productRouter.get('/', ProductController.getAll);
productRouter.post('/', validateProduct, ProductController.create);

export default productRouter;