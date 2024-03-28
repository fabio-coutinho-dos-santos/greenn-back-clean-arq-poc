import { ApiProperty } from "@nestjs/swagger";

export class NotFoundError {
  @ApiProperty({default: 404})
  statusCode: number

  @ApiProperty({default: 'Object not found'})
  message: string
}