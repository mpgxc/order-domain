import { Type } from 'class-transformer';
import {
  IsUUID,
  IsArray,
  IsNumber,
  IsString,
  IsNotEmpty,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';

class PurchaseProducts {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreatePurchaseInput {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  customerId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PurchaseProducts)
  products: Array<PurchaseProducts>;
}
