import { CreateUserDto } from './dto/create-user-dto';
import { ConflictException, Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getUsers() {
    return [{ id: '123', name: 'asd' }];
  }

  async findOne(valuePropertyToSearch): Promise<User | undefined> {
    const userFound = await this.userModel.findOne(valuePropertyToSearch);
    return userFound;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User | undefined> {
    const userNameAlreadyUsed = await this.findOne({
      username: createUserDto.username,
    });

    const emailAlreadyUsed = await this.findOne({ email: createUserDto.email });

    if (userNameAlreadyUsed) {
      throw new ConflictException({
        message: 'Username already used',
      });
    }

    if (emailAlreadyUsed) {
      throw new ConflictException({
        message: 'Email already used',
      });
    }

    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }
}
