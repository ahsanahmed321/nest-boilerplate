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

import { TaskService } from './task.service';
import { ClientService } from '../client/client.service';
import { BidService } from '../bid/bid.service';
import { FreelancerService } from '../freelancer/freelancer.service';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly bidService: BidService,
    private readonly freelancerService: FreelancerService,
    private readonly clientService: ClientService,
  ) {}

  @Post('/createTask')
  async createTask(
    @Body('clientId') clientId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const task = await this.taskService.createTask(
      clientId,
      title,
      description,
      price,
    );

    const client = await this.clientService.createTask(clientId, task._id);

    if (task && client) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Task Created',
          data: task,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'Sorry task cannot be created',
        },
        HttpStatus.OK,
      );
    }
  }

  @Post('acceptBid')
  async acceptBid(
    @Body('taskId') taskId: string,
    @Body('bidId') bidId: string,
  ) {
    const freelancerId = await this.bidService.acceptBid(bidId);

    const task = await this.taskService.acceptBid(taskId, freelancerId);

    const freelancer = await this.freelancerService.acceptBid(
      freelancerId,
      taskId,
    );
  }
}
