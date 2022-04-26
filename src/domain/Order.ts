import { AggregateRoot } from 'src/common/AggregateRoot';
import { Item } from './Item';
import { OrderItem } from './OrderItem';

type OrderStatus = 'PENDING' | 'APPROVED' | 'CANCELED' | 'CONCLUDED';

type OrderProps = {
  customerId: string;
  /**
   * ! Apesar do campo ficar visível na função factory da classe não é interessante utilizá-la
   * ! para iniciliazar o array de items do pedido pois esse atributo é inicializado como array vazio
   * ! dentro do constructor da classe
   */
  orderItems?: Array<OrderItem>;
  orderDate?: Date;
  orderStatus?: OrderStatus; // TODO: Implementar Futuramente | Pode ser um Value Object
};

class Order extends AggregateRoot<OrderProps> {
  /**
   * ! Getters e Setters
   */

  get orderItems(): Array<OrderItem> {
    return this._props.orderItems;
  }

  get totalCost(): number {
    const total = this._props.orderItems.reduce(
      (acc, current) => acc + current.price,
      0,
    );

    return total;
  }

  public addItem(item: Item, quantity: number) {
    const instance = OrderItem.build({
      itemId: item.id,
      price: item.price,
      quantity,
    });

    this._props.orderItems.push(instance);

    return this;
  }

  private constructor(props: OrderProps, id?: string) {
    super(props, id);

    this._props.orderItems = [];
    this._props.orderDate = new Date();
    this._props.orderStatus = 'PENDING';
  }

  static build(props: OrderProps, id?: string) {
    return new this(props, id);
  }
}

export { Order };
