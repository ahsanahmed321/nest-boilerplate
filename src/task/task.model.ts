import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currentFreelancers: { type: String },
  bids: { type: Array },
  status: { type: String },
});

export interface Task extends mongoose.Document {
  clientId: String;
  title: String;
  description: String;
  price: Number;
  currentFreelancer: String;
  bids: [];
  status: String;
}
