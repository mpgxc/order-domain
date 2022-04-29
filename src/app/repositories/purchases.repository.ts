import { Purchase } from '../../domain/purchases/entities/purchases';
import { PrismaService } from '../../infra/database/prisma.service';

import { Maybe } from 'domain/commons/maybe';
import { PurchaseProduct } from 'domain/purchases/entities/purchases_products';
import {
  IPurchaseRepository,
  PurchaseResponse,
} from '../../domain/purchases/purchases.repository';
import { Injectable } from '@nestjs/common';

enum PurchasesStatus {
  PENDING,
  APPROVED,
  CANCELED,
  CONCLUDED,
}

@Injectable()
class PurchaseRepository implements IPurchaseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(props: Purchase): Promise<void> {
    // TODO: Adicionar um ervice DataMapper para Purchase
    //! toPersistence
    const { id, customerId, purchaseDate, purchaseStatus, purchaseProducts } =
      props;

    const pProducts = purchaseProducts.map(
      ({ id, name, quantity, unitPrice: price, productId }) => ({
        id,
        name,
        price,
        quantity,
        productId,
      }),
    );

    await this.prisma.purchase.create({
      data: {
        id,
        customerId,
        purchaseDate,
        purchaseStatus: Array(purchaseStatus)[purchaseStatus],
        purchaseProducts: {
          createMany: {
            data: pProducts,
          },
        },
      },
    });
  }

  async list(): Promise<PurchaseResponse[]> {
    const purchases = await this.prisma.purchase.findMany({
      include: {
        purchaseProducts: true,
      },
    });

    // TODO: Adicionar um ervice DataMapper para PurchaseResponse[]
    //! toRender/toView/toDTO
    return purchases.map(
      ({ id, purchaseDate, purchaseProducts, purchaseStatus }) => ({
        id,
        purchaseDate,
        purchaseStatus: purchaseStatus,
        purchaseProducts: purchaseProducts.map((pProducts) => ({
          ...pProducts,
          price: Number(pProducts.price),
        })),
      }),
    );
  }

  async find(id: string): Promise<Maybe<Purchase>> {
    const purchase = await this.prisma.purchase.findUnique({
      where: {
        id,
      },
      include: {
        purchaseProducts: true,
      },
    });

    if (!purchase) return null;

    // TODO: Adicionar um ervice DataMapper para Purchase
    //! toDomain
    const purchaseProducts = purchase.purchaseProducts.map(
      ({ id, name, price, productId, quantity }) =>
        PurchaseProduct.build(
          {
            name,
            price: Number(price),
            productId,
            quantity,
          },
          id,
        ),
    );

    return Purchase.build(
      {
        customerId: purchase.customerId,
        purchaseProducts,
        purchaseDate: purchase.purchaseDate,
        purchaseStatus: PurchasesStatus[purchase.purchaseStatus],
      },
      purchase.id,
    );
  }
}

export { PurchaseRepository };
