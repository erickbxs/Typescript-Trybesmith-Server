import { Request, Response, NextFunction } from 'express';
import { Product } from '../types/Product';
import productSchema from '../schemas/product.schemas';
import getCustomError from '../helpers/getCustomError';

const validateProduct = (req: Request, _res: Response, next: NextFunction): void => {
  const { name, price }: Product = req.body;
  const { error } = productSchema.validate({ name, price });

  if (error) {
    const customError = getCustomError(error);
    return next(customError);
  }

  next();
};

export default validateProduct;