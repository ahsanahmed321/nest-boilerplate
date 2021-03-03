import * as mongoose from 'mongoose';

export const FreelancerSchema = new mongoose.Schema({
  balance: { type: Number },
  currentTask: { type: Array },
  skills: { type: Array },
  certifications: { type: Array },
  education: { type: Array },
});

export interface Freelancer extends mongoose.Document {
  balance: Number;
  currentTask: [];
  skills: [];
  certifications: [];
  education: [];
}
