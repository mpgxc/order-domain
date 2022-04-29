import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerInput {
  @IsString()
  @IsNotEmpty()
  name: string;
}
