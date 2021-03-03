import {
  Injectable,
  HttpException,
  HttpStatus,
  // NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Freelancer } from './freelancer.model';
// import { MailerService } from "@nestjs-modules/mailer";

const bcrypt = require('bcrypt');

@Injectable()
export class FreelancerService {
  constructor(
    @InjectModel('Freelancer')
    private readonly freelancerModel: Model<Freelancer>,
  ) {}
}
