import productDatabase from "../database/models/product.js";

// eslint-disable-next-line no-return-await

const productData = {
  async getProducts() {
    return productDatabase.find({});
  },

  async getProduct(description) {
    return productDatabase.findOne({ description: `${description}` });
  },
  async getProductById(id) {
    return productDatabase.findOne({ _id: `${id}` });
  },

  async saveProduct(product) {
    return productDatabase.create(product);
  },

  async updateProduct(_id, values) {
    return productDatabase.findOneAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
  },

  async deleteProduct(id) {
    return productDatabase.deleteOne({ _id, id });
  },
};

export default productData;
