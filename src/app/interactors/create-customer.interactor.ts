import { Inject, Injectable } from '@nestjs/common';

import { CustomersRepository } from 'app/repositories/customers.repository';
import { Customer } from 'domain/customers/customer';
import { ICustomersRepository } from 'domain/customers/customers.repository';
import {
  ICreateCustomerInteractor,
  CreateCustomerInput,
} from 'domain/customers/interactors/create-customer';

@Injectable()
class CreateCustomerInteractor implements ICreateCustomerInteractor {
  constructor(
    @Inject(CustomersRepository.name)
    protected readonly repository: ICustomersRepository,
  ) {}

  async handle({ name }: CreateCustomerInput): Promise<void> {
    const customer = Customer.build({ name });

    await this.repository.save(customer);
  }
}

export { CreateCustomerInteractor };
