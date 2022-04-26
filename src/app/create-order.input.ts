import { IsString, IsNumber } from 'class-validator';

export class CreateOrderInput {
  @IsString()
  title: string;

  @IsNumber()
  price: string;
}
