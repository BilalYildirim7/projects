// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Index - GET all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
    console.error(error.message);
  }
});

// Show - GET a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
    console.error(error.message);
  }
});

// Create - POST a new product
router.post('/', async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.json(newProduct);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).json({ msg: 'Something went wrong' });
      console.error(error.message);
    }
  });

// Update - PUT a product by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
    console.error(error.message);
  }
});

// Delete - DELETE a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
    console.error(error.message);
  }
});

module.exports = router;
