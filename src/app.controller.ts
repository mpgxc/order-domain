import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { ICreateCustomerInteractor } from 'domain/customers/interactors/create-customer';
import { ICreateProductInteractor } from 'domain/products/interactors/create-product';
import { ICreatePurchaseInteractor } from 'domain/purchases/interactors/create-purchase';

import { CreateCustomerInteractor } from './app/interactors/create-customer.interactor';
import { CreateProductInteractor } from './app/interactors/create-product.interactor';
import { CreatePurchaseInteractor } from './app/interactors/create-purchase.interactor';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { CreateProductInput } from './inputs/create-product.input';
import { CreatePurchaseInput } from './inputs/create-purchase.input';

@Controller()
export class AppController {
  constructor(
    @Inject(CreatePurchaseInteractor.name)
    private readonly purchaseInteractor: ICreatePurchaseInteractor,

    @Inject(CreateCustomerInteractor.name)
    private readonly customerInteractor: ICreateCustomerInteractor,

    @Inject(CreateProductInteractor.name)
    private readonly productInteractor: ICreateProductInteractor,
  ) {}

  @Get('purchase')
  async createPurchase(@Body() props: CreatePurchaseInput): Promise<void> {
    return this.purchaseInteractor.handle({
      customerId: props.customerId,
      products: props.products,
    });
  }

  @Post('customer')
  async createCustomer(@Body() props: CreateCustomerInput): Promise<void> {
    return this.customerInteractor.handle({
      name: props.name,
    });
  }

  @Post('product')
  async createProduct(@Body() props: CreateProductInput): Promise<void> {
    return this.productInteractor.handle({
      name: props.name,
      price: props.price,
    });
  }
}
