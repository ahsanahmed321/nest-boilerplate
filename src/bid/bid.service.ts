import {
  Injectable,
  HttpException,
  HttpStatus,
  // NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bid } from './bid.model';

@Injectable()
export class BidService {
  constructor(
    @InjectModel('Bid')
    private readonly bidModel: Model<Bid>,
  ) {}

  async createBid(
    freelancerId: string,
    taskId: string,
    amount: number,
    description: string,
    conditions: any,
  ) {
    const newBid = new this.bidModel({
      freelancerId,
      taskId,
      amount,
      description,
      conditions,
    });

    return newBid.save();
  }

  async acceptBid(bidId: string) {
    const bid = await this.bidModel.findOne({ _id: bidId });
    return bid.freelancerId;
  }
}
