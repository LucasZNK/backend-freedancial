import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user' })
  @IsString()
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: false, description: 'The age of the user' })
  @IsNumber()
  @IsPositive()
  age?: number;
}
