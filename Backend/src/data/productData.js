import Product from "../database/models/product.js";

const productData = {
  getProducts: async () => {
    const result = await Product.find();
    return result;
  },

  getProductByDescription: async (description) =>
    await Product.findOne({ description: `${description}` }),

  getProductById: async (id) => {
    const data = await Product.findOne({ _id: `${id}` });
    return data;
  },

  saveProduct: async (product) => {
    const newProduct = await Product.create(product).catch((error) => ({
      message: error.message,
    }));
    return newProduct;
  },

  updateProduct: async (_id, values) =>
    await Product.findOneAndUpdate(_id, { $set: { ...values } }, { new: true }),

  deleteProduct: async (id) => await Product.deleteOne({ _id, id }),
};

export default productData;
