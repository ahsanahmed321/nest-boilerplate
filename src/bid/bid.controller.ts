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

import { BidService } from './bid.service';
import { TaskService } from '../task/task.service';

@Controller('bid')
export class BidController {
  constructor(
    private readonly bidService: BidService,
    private readonly taskService: TaskService,
  ) {}

  @Post('/createBid')
  async createBid(
    @Body('freelancerId') freelancerId: string,
    @Body('taskId') taskId: string,
    @Body('amount') amount: number,
    @Body('description') description: string,
    @Body('conditions') conditions: any,
  ) {
    const bid = await this.bidService.createBid(
      freelancerId,
      taskId,
      amount,
      description,
      conditions,
    );

    const task = await this.taskService.createBid(taskId, bid._id);

    if (bid && task) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Bid Created',
          data: bid,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'Sorry bid cannot be created',
        },
        HttpStatus.OK,
      );
    }
  }
}
