import {
  Injectable,
  HttpException,
  HttpStatus,
  // NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
// import { MailerService } from "@nestjs-modules/mailer";

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async signup(
    username: String,
    email: String,
    password: String,
    contact: String,
  ) {
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      password = await bcrypt.hash(password, 10);
      const newUser = new this.userModel({
        username,
        email,
        password,
        contact,
      });

      const result = await newUser.save();

      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Account Created',
          data: result,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          msg: 'This email is already in use',
        },
        HttpStatus.OK,
      );
    }
  }

  async login(username, password) {
    const user = await this.userModel.findOne({ username });
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (user && isPasswordMatching) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'username or password not correct',
        },
        HttpStatus.OK,
      );
    }
  }

  async createClientProfile(userId: String, clientProfileId: String) {
    const user = await this.userModel.findOneAndUpdate(
      { _id: userId },
      { clientProfileId },
    );

    return user;
  }

  async createFreelancerProfile(userId: String, freelancerProfileId: String) {
    const user = await this.userModel.findOneAndUpdate(
      { _id: userId },
      { freelancerProfileId },
    );

    return user;
  }
}
