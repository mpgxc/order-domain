import { AggregateRoot } from '../commons/aggregate-root';

type ProductProps = {
  name: string;
  price: number;
};

class Product extends AggregateRoot<ProductProps> {
  get price() {
    return this._props.price;
  }

  get name() {
    return this._props.name;
  }

  private constructor(props: ProductProps, id?: string) {
    super(props, id);
  }

  static build(props: ProductProps, id?: string) {
    return new this(props, id);
  }
}

export { Product };
