import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  clientProfileId: { type: String },
  freelancerProfileId: { type: String },
});

export interface User extends mongoose.Document {
  username: String;
  email: String;
  password: String;
  contact: String;
  clientProfileId: String;
  freelancerProfileId: String;
}
