import { Entity } from '../common/Entity';

type ItemProps = {
  title: string;
  price: number;
};

class Item extends Entity<ItemProps> {
  /**
   * ! Getters e Setters
   */

  get price() {
    return this._props.price;
  }

  private constructor(props: ItemProps, id?: string) {
    super(props, id);
  }

  static build(props: ItemProps, id?: string) {
    return new this(props, id);
  }
}

export { Item };
