import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FreelancerModule } from './freelancer/freelancer.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://muneeb:getndgo_123@cluster0.kglmu.mongodb.net/upwork?retryWrites=true&w=majority',
      { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true },
    ),
    FreelancerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
