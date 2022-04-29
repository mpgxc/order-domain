import { Product } from './product';
import { Maybe } from '../commons/maybe';

export type ProductResponse = {
  id: string;
  name: string;
  price: number;
};

interface IProductsRepository<Input = Product, Output = ProductResponse> {
  save(props: Input): Promise<void>;
  list(): Promise<Array<Output>>;
  find(id: string): Promise<Maybe<Input>>;
  findMany(ids: Array<string>): Promise<Array<ProductResponse>>;
}

export { IProductsRepository };
