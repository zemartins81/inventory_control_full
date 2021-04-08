import productData from "../data/productData";

exports.getProducts = async () => await productData.find({});

exports.getProduct = async (description) =>
  await productData.findOne({ description: `${description}` });

exports.getProductById = async (id) =>
  await productData.findOne({ _id: `${id}` });

exports.saveProduct = async (product) => await productData.create(product);

exports.updateProduct = async (_id, values) =>
  productData.findOneAndUpdate(_id, { $set: { ...values } }, { new: true });

exports.deleteProduct = async (id) => productData.deleteOne({ _id, id });
