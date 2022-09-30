import { Inject, Injectable } from '@nestjs/common';

import { ProductsRepository } from 'app/repositories/products.repository';
import {
  CreateProductInput,
  ICreateProductInteractor,
} from 'domain/products/interactors/create-product';
import { Product } from 'domain/products/product';
import { IProductsRepository } from 'domain/products/products.repository';

@Injectable()
class CreateProductInteractor implements ICreateProductInteractor {
  constructor(
    @Inject(ProductsRepository.name)
    protected readonly repository: IProductsRepository,
  ) {}

  async handle({ name, price }: CreateProductInput): Promise<void> {
    const product = Product.build({ name, price });

    await this.repository.save(product);
  }
}

export { CreateProductInteractor };
