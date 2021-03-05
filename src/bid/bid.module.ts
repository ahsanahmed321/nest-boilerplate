import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { BidSchema } from './bid.model';

import { TaskModule } from '../task/task.module';

@Module({
  imports: [
    forwardRef(() => TaskModule),
    MongooseModule.forFeature([{ name: 'Bid', schema: BidSchema }]),
  ],
  controllers: [BidController],
  providers: [BidService],
  exports: [BidService],
})
export class BidModule {}
