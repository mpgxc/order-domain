import { Inject, Injectable } from '@nestjs/common';

import { IProductsRepository } from 'domain/products/products.repository';
import { IPurchaseRepository } from 'domain/purchases/purchases.repository';

import { ProductsRepository } from './products.repository';
import { PurchaseRepository } from './purchases.repository';

interface IPurchaseMixinRepository {
  product: IProductsRepository;
  purchase: IPurchaseRepository;
}

@Injectable()
class PurchaseMixinRepository implements IPurchaseMixinRepository {
  constructor(
    @Inject(PurchaseRepository.name)
    public readonly purchase: IPurchaseRepository,

    @Inject(ProductsRepository.name)
    public readonly product: IProductsRepository,
  ) {}
}

export { PurchaseMixinRepository, IPurchaseMixinRepository };
