import { Min, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateProductInput {
  @IsNumber()
  @Min(1)
  price: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
