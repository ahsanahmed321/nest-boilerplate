import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  NIC: { type: String, required: true },
  balance: { type: Number },
  currentTasks: { type: Array },
});

export interface Client extends mongoose.Document {
  NIC: String;
  balance: Number;
  currentTasks: [];
}
