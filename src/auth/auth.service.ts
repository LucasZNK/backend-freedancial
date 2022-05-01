import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ username: username });

    if (!user) {
      throw new NotFoundException();
    }

    if (user.password === password) {
      const { password, username, ...rest } = user;
      return rest;
    }

    return null;
  }
}
