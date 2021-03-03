import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  balance: { type: Number },
  currentTask: { type: Array },
});

export interface Client extends mongoose.Document {
  balance: Number;
  currentTask: [];
}
