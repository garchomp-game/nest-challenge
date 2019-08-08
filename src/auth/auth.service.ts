import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(name: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(name);
        let bcrypt = require('bcrypt')
        if (user && user.password == bcrypt.hashSync(pass, 15)) {
            const { password, ...result } = user;
            return result;
        }
    }
}
