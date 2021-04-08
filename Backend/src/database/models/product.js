import database from "../database.js";

const productSchema = new database.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const productDatabase = database.model("Product", productSchema);

export default productDatabase;
