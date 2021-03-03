import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FreelancerController } from './freelancer.controller';
import { FreelancerService } from './freelancer.service';
import { FreelancerSchema } from './freelancer.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Freelancer', schema: FreelancerSchema },
    ]),
  ],
  controllers: [FreelancerController],
  providers: [FreelancerService],
  exports: [FreelancerService],
})
export class FreelancerModule {}
