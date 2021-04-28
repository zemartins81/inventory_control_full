import Product from "../database/models/product.js";

const productData = {
  getProducts: async () => await Product.find({}),

  getProductByDescription: async (description) =>
    await Product.findOne({ description: `${description}` }),

  getProductById: async (id) => Product.findOne({ _id: `${id}` }),

  saveProduct: async (product) => {
    const newProduct = await Product.create(product).catch((erro) => {
      console.log(erro);
    });
    console.log(newProduct);
    return newProduct;
  },

  updateProduct: async (_id, values) =>
    await Product.findOneAndUpdate(_id, { $set: { ...values } }, { new: true }),

  deleteProduct: async (id) => await Product.deleteOne({ _id, id }),
};

export default productData;
