import { AggregateRoot } from '../../commons/aggregate-root';
import { PurchaseProduct } from './purchases_products';

enum PurchasesStatus {
  PENDING,
  APPROVED,
  CANCELED,
  CONCLUDED,
}

type PurchasesProps = {
  customerId: string;
  purchaseProducts: Array<PurchaseProduct>;
  purchaseDate?: Date;
  purchaseStatus?: PurchasesStatus;
};

class Purchase extends AggregateRoot<PurchasesProps> {
  get customerId(): string {
    return this._props.customerId;
  }

  get purchaseDate(): Date {
    return this._props.purchaseDate;
  }

  get purchaseProducts(): Array<PurchaseProduct> {
    return this._props.purchaseProducts;
  }

  get purchaseStatus(): PurchasesStatus {
    return this._props.purchaseStatus;
  }

  set purchaseStatus(status: PurchasesStatus) {
    this._props.purchaseStatus = status;
  }

  get totalCost(): number {
    const total = this._props.purchaseProducts.reduce(
      (acc, current) => acc + current.totalPrice,
      0,
    );

    return total;
  }

  private constructor(props: PurchasesProps, id?: string) {
    super(props, id);

    this._props.purchaseDate = new Date();
    this._props.purchaseStatus = PurchasesStatus.PENDING;
  }

  static build(props: PurchasesProps, id?: string) {
    return new this(props, id);
  }
}

export { Purchase };
