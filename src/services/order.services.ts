import orderModel from '../database/models/order.model';
import productModel from '../database/models/product.model';
import { Order } from '../types/Order';

const listProducts = async (): Promise<Order[]> => {
  const get = await orderModel.findAll({
    include: { model: productModel, as: 'productIds', attributes: ['id'] },
  });

  const getAll = get.map(({ dataValues: { id, userId, productIds } }) => 
    ({ id, userId, productIds: productIds?.map(({ id: prodId }) => prodId) })) as Order[];

  return getAll;
};

export default { listProducts };
