import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtSerive: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ username: username });

    if (!user) {
      throw new NotFoundException();
    }

    const isPasswordValid = comparePassword(password, user.password);

    if (isPasswordValid) {
      const { username, email } = user;
      return {
        username,
        email,
      };
    }

    return null;
  }

  async login(user) {
    const payload = { email: user.email, username: user.username };

    return {
      access_token: this.jwtSerive.sign(payload),
    };
  }
}
