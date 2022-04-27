import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreatePurchaseInteractor } from './app/create-purchase.interactor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CreatePurchaseInteractor],
})
export class AppModule {}
