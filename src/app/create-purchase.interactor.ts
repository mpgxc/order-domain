import { Injectable } from '@nestjs/common';
import { EntityId } from 'common/entity_id';
import { PurchaseFactory } from 'domain/purchases/factories/purchase.factory';

@Injectable()
export class CreatePurchaseInteractor {
  async handle(): Promise<void> {
    const products = [
      {
        productId: EntityId.build(),
        name: 'Pizza',
        price: 40.9,
        quantity: 2,
      },
      {
        productId: EntityId.build(),
        name: 'Refrigerante',
        price: 10,
        quantity: 3,
      },
      {
        productId: EntityId.build(),
        name: 'Coxinha',
        price: 3.5,
        quantity: 10,
      },
    ];

    const purchase = PurchaseFactory.build({
      customerId: EntityId.build(),
      products,
    });

    console.log('>:', purchase);
    console.log('>:', purchase.purchaseProducts);
    console.log('>:', purchase.totalCost);
  }
}
