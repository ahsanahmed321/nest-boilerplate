import {
  Injectable,
  HttpException,
  HttpStatus,
  // NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Freelancer } from './freelancer.model';
// import { MailerService } from "@nestjs-modules/mailer";

const bcrypt = require('bcrypt');

@Injectable()
export class FreelancerService {
  constructor(
    @InjectModel('Freelancer')
    private readonly freelancerModel: Model<Freelancer>,
  ) {}

  async createProfile(skills: any) {
    const freelancerProfile = new this.freelancerModel({
      skills,
    });

    return freelancerProfile.save();
  }

  async updateSkills(freelancerId: string, skills: any) {
    const updatedProfile = await this.freelancerModel.findOneAndUpdate(
      { _id: freelancerId },
      { skills },
    );
    return updatedProfile;
  }

  async updateCertifications(freelancerId: string, certifications: any) {
    const updatedProfile = await this.freelancerModel.findOneAndUpdate(
      { _id: freelancerId },
      { certifications },
    );

    return updatedProfile;
  }

  async updateEducation(freelancerId: string, education: any) {
    const updatedProfile = await this.freelancerModel.findOneAndUpdate(
      { _id: freelancerId },
      { education },
    );

    return updatedProfile;
  }
}
