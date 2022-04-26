import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateOrderInteractor } from './app/create-order.interactor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CreateOrderInteractor],
})
export class AppModule {}
