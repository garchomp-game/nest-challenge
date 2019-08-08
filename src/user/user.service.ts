import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async findOne(name: string): Promise<User | undefined> {
    return this.UserRepository.findOne({ name });
  }
  async signUp(name: string, password: string) {
    const user: User = new User();
    user.name = name;
    user.password = password;
    this.UserRepository.save(user);
  }
}
