import escapeStringRegexp from "escape-string-regexp";
import Product from "../database/models/product.js";

const productData = {
  getProducts: async () => await Product.find(),

  getProductByDescription: async (description) => {
    const $regex = escapeStringRegexp(description);
    return Product.find({ description: { $regex } }).sort({ name: 1 });
  },

  getProductById: async (id) => await Product.findOne({ _id: `${id}` }),

  getProductByName: async (name) => {
    const $regex = escapeStringRegexp(name);
    return Product.find({ name: { $regex } }).sort({ name: 1 });
  },

  saveProduct: async (product) => {
    const newProduct = await Product.create(product).catch((error) => ({
      message: error.message,
    }));
    return newProduct;
  },

  updateProduct: async (_id, values) =>
    await Product.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    ),

  deleteProduct: async (id) => Product.findByIdAndDelete(id)
};

export default productData;