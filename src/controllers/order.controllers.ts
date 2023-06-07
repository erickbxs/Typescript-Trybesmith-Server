import { Request, Response } from 'express';
import orderServices from '../services/order.services';

const listProducts = async (_req: Request, res: Response): 
Promise<Response> => {
  const get = await orderServices.listProducts();
  return res.status(200).json(get);
};

export default { listProducts };
