import mongoose from "mongoose";
import dotenv from "dotenv";
import path, { join } from "path";

const __dirname = path.dirname("../");
dotenv.config({
  path: join(__dirname, ".env"),
});

const database = mongoose;

database
  .connect( `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.pixlg.gcp.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("conectado ao DB!"))
  .catch((err) => {
    console.log(`Não foi possível conectar no DB.  ${err}`)
  });

export default database;