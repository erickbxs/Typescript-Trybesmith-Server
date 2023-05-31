import { Request, Response } from 'express';
import ProductService from '../services/product.services';
import { Product } from '../types/Product';

const ProductController = {
  create: async (req: Request, res: Response): Promise<void> => {
    const created: Product = await ProductService.create(req.body);
    res.status(201).json(created);
  },

  getAll: async (req: Request, res: Response): Promise<void> => {
    const products: Product[] = await ProductService.getAll();
    res.status(200).json(products);
  },
};

export default ProductController;
