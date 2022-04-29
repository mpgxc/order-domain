import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchaseMixinRepository } from '../../app/repositories/mixin.repository';
import {
  CreatePurchaseInput,
  ICreatePurchaseInteractor,
} from '../../domain/purchases/interactors/create-purchase';
import { PurchaseInputMapper } from '../../app/mappers/purchase-input.mapper';
import { PurchaseFactory } from 'domain/purchases/factories/purchase.factory';

@Injectable()
class CreatePurchaseInteractor implements ICreatePurchaseInteractor {
  constructor(private readonly repository: PurchaseMixinRepository) {}

  async handle({ customerId, products }: CreatePurchaseInput): Promise<void> {
    const productsExists = await this.repository.product.findMany(
      products.map(({ productId }) => productId),
    );

    if (!productsExists.length) {
      throw new NotFoundException('Products not found!');
    }

    //? Combina os dois arrays em um novo formato para persistência
    const productsCombine = PurchaseInputMapper.execute(
      products,
      productsExists,
    );

    const purchase = PurchaseFactory.build({
      customerId,
      products: productsCombine,
    });

    await this.repository.purchase.save(purchase);
  }
}
export { CreatePurchaseInteractor };
