import { Maybe } from 'domain/commons/maybe';
import { Purchase } from 'domain/purchases/entities/purchases';

export type PurchaseProductResponse = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type PurchaseResponse = {
  id: string;
  purchaseDate: Date;
  purchaseStatus: string;
  purchaseProducts: Array<PurchaseProductResponse>;
};

interface IPurchaseRepository<Input = Purchase, Output = PurchaseResponse> {
  save(props: Input): Promise<void>;
  list(): Promise<Array<Output>>;
  find(id: string): Promise<Maybe<Input>>;
}

export { IPurchaseRepository };
