import { Entity } from '../../commons/entity';

type PurchaseProductProps = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

class PurchaseProduct extends Entity<PurchaseProductProps> {
  get productId() {
    return this._props.productId;
  }

  get name() {
    return this._props.name;
  }

  get quantity() {
    return this._props.quantity;
  }

  get unitPrice() {
    return this._props.price;
  }

  get totalPrice() {
    return this._props.price * this._props.quantity;
  }

  private constructor(props: PurchaseProductProps, id?: string) {
    super(props, id);
  }

  static build(props: PurchaseProductProps, id?: string) {
    return new this(props, id);
  }
}

export { PurchaseProduct, PurchaseProductProps };
