import { Request, Response } from 'express';
import orderService from '../services/order.services';

const orderController = {
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const orders = await orderService.getAll();
    return res.status(200).json(orders);
  },

  get: async (req: Request, res: Response): Promise<Response> => {
    const inputOrder = req.body;
  
    const order = await orderService.get(inputOrder);
    
    if (order === null) {
      return res.status(404).json({ message: '"userId" not found' });
    }
  
    return res.status(201).json(order);
  },
};

export default orderController;
