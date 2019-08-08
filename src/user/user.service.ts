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
    async signUp(name: string, password: string, email: string): Promise<User> {
        let bcrypt = await require('bcrypt')
        let user = new User()
        user.name = name
        user.email = email
        let saltRounds: number = 15
        user.password = await bcrypt.hashSync(password, saltRounds)
        return this.UserRepository.save(user)
    }
}
