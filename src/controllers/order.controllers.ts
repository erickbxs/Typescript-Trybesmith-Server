import { Request, Response } from 'express';
import orderServices from '../services/order.services';

const listProducts = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const orders = await orderServices.listProducts();
  return res.status(200).json(orders);
};

export default { listProducts };
