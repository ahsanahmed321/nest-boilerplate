import * as mongoose from 'mongoose';

export const BidSchema = new mongoose.Schema({
  freelancerId: { type: String, required: true },
  taskId: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  conditions: { type: Object, required: true },
});

export interface Bid extends mongoose.Document {
  freelancerId: String;
  taskId: String;
  amount: Number;
  description: String;
  conditions: {};
}
