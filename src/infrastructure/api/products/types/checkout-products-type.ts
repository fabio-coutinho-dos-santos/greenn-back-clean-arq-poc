import { ApiProperty } from "@nestjs/swagger"

export class ProductType {
  @ApiProperty()
  id: number;
  
  @ApiProperty()
  name: string;
}

export class CheckoutProductType {
  @ApiProperty()
  data: ProductType;
}