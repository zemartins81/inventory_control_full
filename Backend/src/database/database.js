import mongoose from "mongoose";

const database = mongoose;

database
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ADDRESS}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("conectado ao DB!"))
  .catch((err) => {
    console.log(`Não foi possível conectar no DB.  ${err}`);
  });

//database.Promise = global.Promise;

export default database;
