import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

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
  getUserById(@Param('id') id: string): User {
    return this.userService.getUserById(id);
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): any {
    return this.userService.createUser(body);
  }
}
