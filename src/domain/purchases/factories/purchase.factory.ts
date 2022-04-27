import { Purchase } from '../entities/purchases';
import {
  PurchaseProduct,
  PurchaseProductProps,
} from '../entities/purchases_products';

type PurchaseFactoryInput = {
  customerId: string;
  products: Array<PurchaseProductProps>;
};

class PurchaseFactory {
  static build(props: PurchaseFactoryInput) {
    const purchaseProducts = props.products.map(
      ({ name, price, productId, quantity }) =>
        PurchaseProduct.build({
          productId,
          name,
          price,
          quantity,
        }),
    );

    return Purchase.build({
      customerId: props.customerId,
      purchaseProducts,
    });
  }
}

export { PurchaseFactory };
