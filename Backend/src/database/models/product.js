import database from "../database.js";

const productSchema = new database.Schema({
  name: {
    type: String,
    required: true,
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
  operations: {
    type: Array,
  },
});

const Product = database.model("Product", productSchema);

export default Product;
