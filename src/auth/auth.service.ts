import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
        ) {}

    async validateUser(name: string, pass: string): Promise<any> {
        console.log(name, pass)
        const user = await this.userService.findOne(name);
        let bcrypt = require('bcrypt')
        if (bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null
    }

    async login(name: string, password: string) {
        const payload = {name, password}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
