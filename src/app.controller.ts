import { LoginDTO } from './login.dto';
import { Controller, Get, UseGuards, Post, Body, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user
  }
}
