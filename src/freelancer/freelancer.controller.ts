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

import { FreelancerService } from './freelancer.service';
import { UserService } from '../user/user.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('freelancer')
export class FreelancerController {
  constructor(
    private readonly freelancerService: FreelancerService,
    private readonly userService: UserService,
  ) {}

  @Post('/createProfile')
  async createProfile(
    @Body('userId') userId: string,
    @Body('skills') skills: any,
  ) {
    const freelancerProfile = await this.freelancerService.createProfile(
      skills,
    );
    const user = await this.userService.createFreelancerProfile(
      userId,
      freelancerProfile._id,
    );

    if (freelancerProfile && user) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Freelancer Profile Created',
          data: freelancerProfile,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'Sorry Freelancer Profile cannot be created',
        },
        HttpStatus.OK,
      );
    }
  }

  @Post('/updateSkills')
  async updateSkills(
    @Body('freelancerId') freelancerId: string,
    @Body('skills') skills: any,
  ) {
    const freelancerProfile = await this.freelancerService.updateSkills(
      freelancerId,
      skills,
    );

    if (freelancerProfile) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Skills Updated',
          data: freelancerProfile,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'Sorry Skills cannot be updated',
        },
        HttpStatus.OK,
      );
    }
  }

  @Post('/updateCertifications')
  async updateCertifications(
    @Body('freelancerId') freelancerId: string,
    @Body('certifications') certifications: any,
  ) {
    const freelancerProfile = await this.freelancerService.updateCertifications(
      freelancerId,
      certifications,
    );

    if (freelancerProfile) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Certififcations Updated',
          data: freelancerProfile,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'Sorry Certitfications cannot be updated',
        },
        HttpStatus.OK,
      );
    }
  }

  @Post('/updateEducation')
  async updateEducation(
    @Body('freelancerId') freelancerId: string,
    @Body('education') education: any,
  ) {
    const freelancerProfile = await this.freelancerService.updateEducation(
      freelancerId,
      education,
    );

    if (freelancerProfile) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          msg: 'Education Updated',
          data: freelancerProfile,
        },
        HttpStatus.OK,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: 'Sorry Education cannot be updated',
        },
        HttpStatus.OK,
      );
    }
  }
}
