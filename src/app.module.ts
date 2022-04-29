import { Module } from '@nestjs/common';
import { CreateCustomerInteractor } from 'app/interactors/create-customer.interactor';
import { CustomersRepository } from './app/repositories/customers.repository';
import { InfraModule } from 'infra/infra.module';
import { AppController } from './app.controller';
import { CreatePurchaseInteractor } from './app/interactors/create-purchase.interactor';
import { CreateProductInteractor } from './app/interactors/create-product.interactor';
import { ProductsRepository } from './app/repositories/products.repository';
import { PurchaseRepository } from './app/repositories/purchases.repository';
import { PurchaseMixinRepository } from './app/repositories/mixin.repository';

@Module({
  imports: [InfraModule],
  controllers: [AppController],
  providers: [
    PurchaseMixinRepository,
    //Products
    CreateProductInteractor,
    ProductsRepository,

    //Purchases
    CreatePurchaseInteractor,
    PurchaseRepository,

    //Customers
    CreateCustomerInteractor,
    CustomersRepository,
  ],
})
export class AppModule {}
