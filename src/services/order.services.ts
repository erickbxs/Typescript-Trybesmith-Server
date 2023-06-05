import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const listProducts = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll();
    
  const products = await ProductModel.findAll();

  return orders.map((order) => ({ ...order.dataValues,
    productIds: products
      .filter((product) => product.dataValues.orderId === order.dataValues.id)
      .map((productId) => productId.dataValues.id),
  }));
};

export default {
  listProducts,
};
