import database from "../database/models/product";

// eslint-disable-next-line no-return-await
exports.getProducts = async () => await database.find({});

exports.getProduct = async (description) =>
  await database.findOne({ description: `${description}` });

exports.getProductById = async (id) => await database.findOne({ _id: `${id}` });

exports.saveProduct = async (product) => await database.create(product);

exports.updateProduct = async (_id, values) =>
  database.findOneAndUpdate(_id, { $set: { ...values } }, { new: true });

exports.deleteProduct = async (id) => database.deleteOne({ _id, id });
