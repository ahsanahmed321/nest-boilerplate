import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Req,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async signup(
    @Body('username') userUsername: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
    @Body('contact') userContact: string,
  ) {
    const res = await this.userService.signup(
      userUsername,
      userEmail,
      userPassword,
      userContact,
    );

    return { result: res };
  }

  @Post('login')
  async login(
    @Body('username') userUsername: string,
    @Body('password') userPassword: string,
  ) {
    const authenticatedUser = await this.userService.login(
      userUsername,
      userPassword,
    );

    const jwt = await this.authService.login(authenticatedUser);
    return jwt;
  }

  @Post('validationTest')
  async validationTest(@Request() req) {
    return req.user;
  }
}
