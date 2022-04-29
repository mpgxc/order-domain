import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { PurchaseRepository } from './purchases.repository';

@Injectable()
class PurchaseMixinRepository {
  constructor(
    public readonly purchase: PurchaseRepository,
    public readonly product: ProductsRepository,
  ) {}
}

export { PurchaseMixinRepository };
