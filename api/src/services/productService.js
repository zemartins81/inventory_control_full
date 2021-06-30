// eslint-disable-next-line import/extensions
import productData from '../data/productData.js';
// eslint-disable-next-line import/extensions
import errorControl from '../helpers/errorControl.js';

const productService = {
  getProducts: async () => {
    try {
      const data = await productData.getProducts();
      if (data.length === 0)
        return {
          status: 200,
          data,
        };
      if (data.message)
        return {
          status: errorControl.badRequest().statusCode,
          message: data.message,
        };
      return { status: 200, data };
    } catch (error) {
      return { status: errorControl.serverError().statusCode, error };
    }
  },

  getProductByName: async (name) => {
    try {
      const data = await productData.getProductByName(name);
      if (data.length === 0)
        return {
          status: errorControl.NotFound().statusCode,
          message: errorControl.NotFound().message,
        };
      if (data.message)
        return {
          status: errorControl.badRequest().statusCode,
          message: data.message,
        };
      return { status: 200, data };
    } catch (error) {
      return { status: errorControl.serverError.statusCode, error };
    }
  },

  getProductByDescription: async (description) => {
    try {
      const data = await productData.getProductByDescription(description);
      if (data.length === 0)
        return {
          status: errorControl.NotFound().statusCode,
          message: errorControl.NotFound().message,
        };
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

  getProductById: async (id) => {
    try {
      const data = await productData.getProductById(id);
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

  updateProduct: async (_id, values) => {
    try {
      const data = await productData.updateProduct(_id, values);
      if (data.message)
        return {
          status: errorControl.noContent().statusCode,
          message: errorControl.noContent().message,
        };
      return { status: 200, data };
    } catch (error) {
      return {
        status: errorControl.serverError().statusCode,
        message: errorControl.noContent().message,
      };
    }
  },

  deleteProduct: async (id) => {
    try {
      const data = await productData.deleteProduct(id);
      if (data.message)
        return {
          status: errorControl.noContent().statusCode,
          message: errorControl.noContent().message,
        };
      return { status: 200, data };
    } catch (error) {
      return {
        status: errorControl.serverError().statusCode,
        message: errorControl.noContent().message,
      };
    }
  },
};

export default productService;
