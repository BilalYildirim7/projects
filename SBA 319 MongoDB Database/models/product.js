// models/product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    minlength: [3, 'Product name must be at least 3 characters long'],
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Electronics', 'Kitchen', 'Clothing', 'Sports', 'Books'], // Example categories
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
