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
  movements: [
    {
      type: String,
      vendor: String,
      quantity: Number,
      unitValue: Number,
    },
  ],
  amount: Number,
});

productSchema.pre('save', function () {
    this.movements = [];
    this.amount = 0;
});


const Product = database.model('Product', productSchema);

export default Product;
