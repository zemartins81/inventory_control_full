// eslint-disable-next-line import/extensions
import database from '../database.js';

const productSchema = new database.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  unityValue: {
    type: Number,
    required: true,
  },
  movements: [
    {
      transactionType: String,
      vendor: String,
      quantity: Number,
      unityValue: Number,
      date: Date,
    },
  ],
  amount: String,
});

productSchema.pre('save', function () {
  this.amount = 0;
});

const Product = database.model('Product', productSchema);

export default Product;
