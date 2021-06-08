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
  vendors: [
    {
      name: String,
      quantity: Number,
      value: Number,
    },
  ],
  value: Number,
});

productSchema.pre('findByIdAndUpdate', function () {
  if (this.vendors.length) {
    this.vendors.forEach((vendor) => {
      this.quantity += vendor.quantity;
      this.value += vendor.value;
    });
  } else {
    this.quantity = 0;
    this.value = 0;
  }
});

const Product = database.model('Product', productSchema);

export default Product;
