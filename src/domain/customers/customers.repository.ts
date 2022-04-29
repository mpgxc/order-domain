import { Maybe } from '../commons/maybe';
import { Customer } from './customer';

export type CustomerResponse = {
  id: string;
  name: string;
};

interface ICustomersRepository<Input = Customer, Output = CustomerResponse> {
  save(props: Input): Promise<void>;
  list(): Promise<Array<Output>>;
  find(id: string): Promise<Maybe<Input>>;
}

export { ICustomersRepository };
