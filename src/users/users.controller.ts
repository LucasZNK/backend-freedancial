import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiCreatedResponse({ type: User, isArray: true })
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @ApiCreatedResponse({
    type: User,
    description: 'The user found with the id provided',
  })
  @Get(':id')
  // pipes for tranformation ParseIntPipe @Param('id'), ParseIntPipe) id :number
  getUserById(@Param('id') id: string): User {
    const user = this.userService.getUserById(id);

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): any {
    return this.userService.createUser(body);
  }
}
