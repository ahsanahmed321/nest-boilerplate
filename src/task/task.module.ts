import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskSchema } from './task.model';

import { ClientModule } from '../client/client.module';
import { BidModule } from '../bid/bid.module';
import { FreelancerModule } from '../freelancer/freelancer.module';

@Module({
  imports: [
    BidModule,
    FreelancerModule,
    ClientModule,

    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
