import {
  Injectable,
  HttpException,
  HttpStatus,
  // NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task')
    private readonly taskModel: Model<Task>,
  ) {}

  async createTask(
    clientId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const newTask = new this.taskModel({
      clientId,
      title,
      description,
      price,
      status: 'pending',
    });

    return newTask.save();
  }

  async createBid(taskId, bidId) {
    const updatedTask = await this.taskModel.findOneAndUpdate(
      { _id: taskId },
      { $push: { bids: bidId } },
    );

    return updatedTask;
  }

  async acceptBid(taskId, freelancerId) {
    const updatedTask = await this.taskModel.findOneAndUpdate(
      { _id: taskId },
      { currentFreelancers: freelancerId, status: 'started' },
    );
  }
}
