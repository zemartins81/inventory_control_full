import productData from "../data/productData.js";
import errorControl from "../helpers/errorControl.js";

const productService = {
  getProducts: async () => {
    try {
      const data = await productData.getProducts();
      if (!data) return { status: errorControl.serverError.statusCode };
      return { status: 200, data };
    } catch (error) {
      return { status: errorControl.serverError.statusCode, error };
    }
  },
  getProductByDescription: async (description) =>
    await productData.getProductByDescription(description),

  getProductById: async (id) => await productData.getProductById(id),

  setProduct: async (product) => {
    try {
      const data = await productData.saveProduct(product);
      // if (!data) return { status: errorControl.dataNotSaved() };
      return { status: 200, data };
    } catch (error) {
      return {
        status: errorControl.serverError().statusCode,
        message: errorControl.serverError().message,
      };
    }
  },

  updateProduct: async (_id, values) =>
    await productData.updateProduct(_id, values),

  deleteProduct: async (id) => await deleteProduct(id),
};

export default productService;
