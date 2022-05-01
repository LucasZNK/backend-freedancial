import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): User[] {
    return [{ id: '123', name: 'asd' }];
  }

  getUserById(id: string): User {
    return { id, name: 'asd' };
  }
  createUser(createUserDto: CreateUserDto) {
    return [createUserDto];
  }
}
