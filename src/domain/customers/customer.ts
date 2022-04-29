import { AggregateRoot } from '../commons/aggregate-root';

type CustomerProps = {
  name: string;
};

class Customer extends AggregateRoot<CustomerProps> {
  get name() {
    return this._props.name;
  }

  private constructor(props: CustomerProps, id?: string) {
    super(props, id);
  }

  static build(props: CustomerProps, id?: string) {
    return new this(props, id);
  }
}

export { Customer };
