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
  if (!this.movements.length) {
    this.movements = [];
    this.amount = 0;
  }
});

productSchema.pre('findByIdAndUpdate', function () {
  if (this.movements.length) {
    this.movements.forEach((vendor) => {
      this.quantity += vendor.quantity;
      this.amount += vendor.amount;
    });
  } else {
    this.quantity = 0;
    this.amount = 0;
  }
});

const Product = database.model('Product', productSchema);

export default Product;
