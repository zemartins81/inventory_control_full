import mongoose from 'mongoose';

import dotenv from 'dotenv';
import path from 'path';

const { resolve, join } = path;

dotenv.config({
  path: join(resolve(), './src/config/', '.env'),
});

const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ADDRESS}:27017/${process.env.MONGO_DATABASE}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('conectado ao DB!'))
  .catch((err) => {
    console.log(`Não foi possível conectar no DB.  ${err}`);
  })

export default mongoose;
