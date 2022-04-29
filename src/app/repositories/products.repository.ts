import { Injectable } from '@nestjs/common';
import { Maybe } from '../../domain/commons/maybe';
import { Product } from '../../domain/products/product';
import {
  IProductsRepository,
  ProductResponse,
} from '../../domain/products/products.repository';
import { PrismaService } from '../../infra/database/prisma.service';

@Injectable()
class ProductsRepository implements IProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(ids: string[]): Promise<ProductResponse[]> {
    const products = await this.prisma.product.findMany({
      where: {
        OR: ids.map((id) => ({ id })),
      },
    });

    return products.map(({ id, name, price }) => ({
      id,
      name,
      price: Number(price),
    }));
  }

  async save(props: Product): Promise<void> {
    const { id, name, price } = props;

    await this.prisma.product.create({
      data: {
        id,
        name,
        price,
      },
    });
  }

  async list(): Promise<ProductResponse[]> {
    const products = await this.prisma.product.findMany();

    return products.map((product) => ({
      ...product,
      price: Number(product.price),
    }));
  }

  async find(id: string): Promise<Maybe<Product>> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) return null;

    return Product.build(
      {
        name: product.name,
        price: Number(product.price),
      },
      product.id,
    );
  }
}

export { ProductsRepository };
