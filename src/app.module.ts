import { Module } from '@nestjs/common';

import { CreateCustomerInteractor } from 'app/interactors/create-customer.interactor';
import { InfraModule } from 'infra/infra.module';

import { AppController } from './app.controller';
import { CreateProductInteractor } from './app/interactors/create-product.interactor';
import { CreatePurchaseInteractor } from './app/interactors/create-purchase.interactor';
import { CustomersRepository } from './app/repositories/customers.repository';
import { PurchaseMixinRepository } from './app/repositories/mixin.repository';
import { ProductsRepository } from './app/repositories/products.repository';
import { PurchaseRepository } from './app/repositories/purchases.repository';

const purchaseProviders = [
  {
    provide: PurchaseMixinRepository.name,
    useClass: PurchaseMixinRepository,
  },
  {
    provide: PurchaseRepository.name,
    useClass: PurchaseRepository,
  },
  {
    provide: CreatePurchaseInteractor.name,
    useClass: CreatePurchaseInteractor,
  },
];

const customerProviders = [
  {
    provide: CustomersRepository.name,
    useClass: CustomersRepository,
  },
  {
    provide: CreateCustomerInteractor.name,
    useClass: CreateCustomerInteractor,
  },
];

const productProviders = [
  {
    provide: ProductsRepository.name,
    useClass: ProductsRepository,
  },
  {
    provide: CreateProductInteractor.name,
    useClass: CreateProductInteractor,
  },
];

@Module({
  imports: [InfraModule],
  controllers: [AppController],
  providers: [purchaseProviders, customerProviders, productProviders].flat(),
})
export class AppModule {}
