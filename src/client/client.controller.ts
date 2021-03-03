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

import { ClientService } from './client.service';
import { UserService } from '../user/user.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('client')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly userService: UserService,
  ) {}

  @Post('/createProfile')
  async createProfile(
    @Body('userId') userId: string,
    @Body('NIC') NIC: string,
  ) {
    const clientProfile = await this.clientService.createProfile(NIC);
    const user = await this.userService.createClientProfile(
      userId,
      clientProfile._id,
    );

    return user;
  }
}
