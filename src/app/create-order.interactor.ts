import { Injectable } from '@nestjs/common';
import { EntityId } from 'src/common/EntityId';
import { Item } from 'src/domain/Item';
import { Order } from 'src/domain/Order';
// import { CreateOrderInput } from '../app/create-order.input';

@Injectable()
export class CreateOrderInteractor {
  // async createOrder(data: CreateOrderInput): Promise<CreateOrderInput> {
  async createOrder(): Promise<void> {
    const pizza = Item.build({
      price: 50,
      title: 'Pizza - Calabresa Tamanho G ',
    });
    const refri = Item.build({
      price: 10,
      title: 'Refrigerante - Coca-cola',
    });
    const order = Order.build({
      customerId: EntityId.build(),
    });

    console.log('Pizza: ', pizza);
    console.log('Refrigerante: ', refri);
    console.log('Pedido: ', order);
    console.log('Total Pedido: ', order.totalCost);
    order.addItem(pizza, 2);
    console.log('Total Pedido: ', order.totalCost);
    order.addItem(refri, 3);
    console.log('Total Pedido: ', order.totalCost);
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
