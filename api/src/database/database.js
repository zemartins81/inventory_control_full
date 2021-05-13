import mongoose from "mongoose";

const database = mongoose;

database
  .connect(
    `mongodb+srv://jcmartins81:cU4B1UPXGEyPQTzR@cluster0.pixlg.gcp.mongodb.net/InventoryControl?retryWrites=true&w=majority`,
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

export default database;
