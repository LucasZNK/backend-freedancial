import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Username to login' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  username: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Name of the user' })
  @IsString()
  @MaxLength(20)
  name?: string;
}
