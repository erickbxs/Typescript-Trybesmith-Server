import { Model } from 'sequelize';
import { Product } from '../types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const ProductService = {
  create: async (product: Product): Promise<Product> => {
    const createdProduct: 
    Model<Product, ProductInputtableTypes> = await ProductModel.create(product);
    return createdProduct.toJSON();
  },

  getAll: async (): Promise<Product[]> => {
    const products: Model<Product, ProductInputtableTypes>[] = await ProductModel.findAll();
    return products.map((product) => product.toJSON());
  },
};

export default ProductService;
