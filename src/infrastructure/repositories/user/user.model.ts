/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export const COLLECTION_NAME = 'users';

@Schema({
  collection: COLLECTION_NAME,
  timestamps: true,
})
export class UserDocument extends Document {
  // @ts-ignore
  _id: Types.ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  pwd: string;

  @Prop({ required: false, type: Object, default: {} })
  metadata?: Record<string, unknown>;

  @Prop({ required: false, type: Date })
  createdAt: Date;

  @Prop({ required: false, type: Date })
  updatedAt: Date;

  @Prop({ required: false, type: Date, default: undefined })
  deletedAt: Date | undefined;
}

export const UserModelName = 'User';

export const UserSchema = SchemaFactory.createForClass(UserDocument);
