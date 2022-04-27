import { Body, Controller, Get } from '@nestjs/common';
import { CreatePurchaseInput } from 'app/create-purchase.input';
import { CreatePurchaseInteractor } from './app/create-purchase.interactor';

@Controller('purchase')
export class AppController {
  constructor(private readonly interactor: CreatePurchaseInteractor) {}

  @Get()
  async createOrder(@Body() props: CreatePurchaseInput): Promise<void> {
    console.log(props);

    return this.interactor.handle();
  }
}
