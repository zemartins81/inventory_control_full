import productData from "../data/productData.js";

const productService = {
  async getProducts() {
    return productData.find({});
  },

  async getProduct(description) {
    return productData.findOne({ description: `${description}` });
  },

  async getProductById(id) {
    return productData.findOne({ _id: `${id}` });
  },

  async saveProduct(product) {
    return productData.create(product);
  },

  async updateProduct(_id, values) {
    return productData.findOneAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
  },

  async deleteProduct(id) {
    return productData.deleteOne({ _id, id });
  },
};

export default productService;
