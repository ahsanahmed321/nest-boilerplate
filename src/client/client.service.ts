import {
  Injectable,
  HttpException,
  HttpStatus,
  // NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.model';
// import { MailerService } from "@nestjs-modules/mailer";

const bcrypt = require('bcrypt');

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client')
    private readonly clientModel: Model<Client>,
  ) {}

  async createProfile(NIC: string) {
    const clientProfile = new this.clientModel({
      NIC,
    });

    return clientProfile.save();
  }

  async createTask(clientId, taskId) {
    const clientProfile = await this.clientModel.findOneAndUpdate(
      { _id: clientId },
      { $push: { currentTasks: taskId } },
    );

    return clientProfile;
  }
}
