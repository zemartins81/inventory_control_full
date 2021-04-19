import database from "../database/database";

const productData = {
  getProducts: async () => {
    return await database.find({});
  },
  getProductByDescription: async (description) => {
    return await database.findOne({ description: `${description}` });
  },
  getProductById: async (id) => {
    return await database.findOne({ _id: `${id}` });
  },
  saveProduct: async (product) => {
    return await database.create(product);
  },
  updateProduct: async (_id, values) => {
    return await database.findOneAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
  },
  deleteProduct: async (id) => {
    return await database.deleteOne({ _id, id });
  },
};

export default productData;
