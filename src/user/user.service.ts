import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
    ){}

    async findOne(name: string): Promise<User | undefined> {
        return this.UserRepository.findOne({name})
    }
}
