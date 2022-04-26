import { Entity } from '../common/Entity';

type OrderItemProps = {
  itemId: string;
  price: number;
  quantity: number;
};

class OrderItem extends Entity<OrderItemProps> {
  /**
   * ! Getters e Setters
   */

  get price() {
    return this._props.price * this._props.quantity;
  }

  private constructor(props: OrderItemProps, id?: string) {
    super(props, id);
  }

  static build(props: OrderItemProps, id?: string) {
    return new this(props, id);
  }
}

export { OrderItem };
