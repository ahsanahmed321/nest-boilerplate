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

import { FreelancerService } from './freelancer.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}
}
