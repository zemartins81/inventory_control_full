import productData from "../data/productData";
import errorControl from "../helpers/errorControl";

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
  getProductByDescription: async (description) => {
    return await productData.getProductByDescription(description);
  },
  getProductById: async (id) => {
    return await productData.getProductById(id);
  },
  saveProduct: async (product) => {
    return await productData.saveProduct(product);
  },
  updateProduct: async (_id, values) => {
    return await productData.updateProduct(_id, values);
  },
  deleteProduct: async (id) => {
    return await deleteProduct(id);
  },
};

export default productService;
