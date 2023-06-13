import UserModel from '../database/models/user.model';
import { Order } from '../types/Order';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';

const listProducts = {
  getAll: async (): Promise<Order[]> => {
    const getOrders = await OrderModel.findAll({
      include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
    });

    const newList = getOrders.map(({ dataValues: { id, userId, productIds } }) => ({
      id,
      userId,
      productIds: productIds?.map(({ id: productId }) => productId),
    })) as Order[];

    return newList;
  },

  get: async (orderInfo: Order): Promise<Order | null | undefined> => {
    const { productIds, userId } = orderInfo;

    const user = await UserModel.findByPk(userId);

    if (user === null) {
      return null;
    }

    const newOrder = await OrderModel.create({ userId });
    const { dataValues: { id } } = newOrder;

    if (productIds) {
      await Promise.all(
        productIds.map(async (prodId) => ProductModel.update({ orderId: id }, {
          where: { id: prodId },
        })),
      );
    }

    return orderInfo;
  },
};

export default listProducts;

