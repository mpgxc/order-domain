import { Injectable } from '@nestjs/common';
import { Maybe } from '../../domain/commons/maybe';
import { Customer } from '../../domain/customers/customer';
import {
  CustomerResponse,
  ICustomersRepository,
} from '../../domain/customers/customers.repository';
import { PrismaService } from '../../infra/database/prisma.service';

@Injectable()
class CustomersRepository implements ICustomersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(props: Customer): Promise<void> {
    const { id, name } = props;

    try {
      await this.prisma.customer.create({
        data: {
          id,
          name,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async list(): Promise<CustomerResponse[]> {
    return this.prisma.customer.findMany();
  }

  async find(id: string): Promise<Maybe<Customer>> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
      },
    });

    if (!customer) return null;

    return Customer.build(
      {
        name: customer.name,
      },
      customer.id,
    );
  }
}

export { CustomersRepository };
