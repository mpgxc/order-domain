import { Injectable } from '@nestjs/common';
import {
  CreateProductInput,
  ICreateProductInteractor,
} from '../../domain/products/interactors/create-product';
import { ProductsRepository } from 'app/repositories/products.repository';
import { Product } from 'domain/products/product';

@Injectable()
class CreateProductInteractor implements ICreateProductInteractor {
  constructor(protected readonly repository: ProductsRepository) {}

  async handle({ name, price }: CreateProductInput): Promise<void> {
    const product = Product.build({ name, price });

    await this.repository.save(product);
  }
}

export { CreateProductInteractor };
