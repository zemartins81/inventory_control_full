import database from "../database";

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

const Product = database.model("Product", productSchema);

export default Product;
