import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }
    @Post('signUp')
    signUp(@Body() req: SignUpDTO) {
        return this.userService.signUp(req.name, req.password);
    }

    @Post('findAll')
    async findAll(@Body() req: any) {
        return await this.userService.findOne(req.name);
    }
}
