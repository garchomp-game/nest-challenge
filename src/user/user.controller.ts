import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAuthDTO } from './user.dto';

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('signup')
    async signUp(@Body() req: UserAuthDTO) {
        return await this.userService.signUp(req.name, req.password, req.email)
    }
}
