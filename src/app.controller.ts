import { Controller, Get } from '@nestjs/common';
import { CreateOrderInteractor } from './app/create-order.interactor';

@Controller('order')
export class AppController {
  constructor(private readonly interactor: CreateOrderInteractor) {}

  @Get()
  createOrder(): void {
    this.interactor.createOrder();
  }
}
