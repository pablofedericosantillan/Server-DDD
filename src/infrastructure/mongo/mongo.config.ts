import { MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import mongooseDelete, { SoftDeleteInterface } from 'mongoose-delete';

const indexFields: Array<keyof SoftDeleteInterface> = ['deleted'];

export const pluginConfigSoftDelete = {
  deletedAt: true,
  overrideMethods: true,
  indexFields,
};

export const createMongooseOptions = (uri: string): MongooseModuleOptions => {
  return {
    uri,
    connectionFactory: (connection: mongoose.Connection) => {
      connection.plugin(
        mongooseDelete as (schema: mongoose.Schema) => void,
        pluginConfigSoftDelete,
      );
      return connection;
    },
  };
};
