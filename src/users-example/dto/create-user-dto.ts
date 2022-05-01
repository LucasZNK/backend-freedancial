import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user' })
  name: string;

  @ApiProperty({ required: false, description: 'The age of the user' })
  age?: number;
}
