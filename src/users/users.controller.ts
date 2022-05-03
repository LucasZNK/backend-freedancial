import { User } from './schemas/user.schema';
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
  getUsers() {
    return this.userService.getUsers();
  }

  @ApiCreatedResponse({
    type: User,
    description: 'The user found with the id provided',
  })
  @Get(':id')
  // pipes for tranformation ParseIntPipe @Param('id'), ParseIntPipe) id :number
  getUserById(@Param('id') id: string): Promise<User> {
    //TODO: fix this, add support for id
    const user = this.userService.findOne({ id: id });

    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    const user = await this.userService.createUser(body);
    return user;
  }
}
