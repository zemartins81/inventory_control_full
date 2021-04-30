// eslint-disable-next-line import/extensions
import productData from "../data/productData.js";
// eslint-disable-next-line import/extensions
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

  getProductByName: async (name) => {
    try {
      const data = await productData.getProductByName(name);
      if (!data) return { status: errorControl.serverError.statusCode };
      return { status: 200, data };
    } catch (error) {
      return { status: errorControl.serverError.statusCode, error };
    }
  },

  getProductByDescription: async (description) =>
    await productData.getProductByDescription(description),

  getProductById: async (id) => {
    try {
      const data = await productData.getProductById(id);
      if (!data)
        return {
          status: errorControl.NotFound().statusCode,
          message: errorControl.NotFound().message,
        };
      return { status: 200, data };
    } catch (error) {
      return {
        status: errorControl.serverError().statusCode,
        message: errorControl.serverError().message,
      };
    }
  },

  setProduct: async (product) => {
    try {
      const data = await productData.saveProduct(product);
      if (data.message)
        return {
          status: errorControl.badRequest().statusCode,
          message: data.message,
        };
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
