import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePurchaseInput } from './inputs/create-purchase.input';
import { CreateCustomerInteractor } from './app/interactors/create-customer.interactor';
import { CreatePurchaseInteractor } from './app/interactors/create-purchase.interactor';
import { CreateCustomerInput } from './inputs/create-customer.input';
import { CreateProductInput } from './inputs/create-product.input';
import { CreateProductInteractor } from './app/interactors/create-product.interactor';

@Controller()
export class AppController {
  constructor(
    private readonly purchaseInteractor: CreatePurchaseInteractor,
    private readonly customerInteractor: CreateCustomerInteractor,
    private readonly productInteractor: CreateProductInteractor,
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
