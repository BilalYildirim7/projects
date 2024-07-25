require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const conn = require('./db/conn');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const User = require('./models/user');
const Product = require('./models/product');
const starterUsers = require('./db/seed');
const seedProducts = require('./db/seedProduct');

// Database connection
conn();

// View Engine Setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Home route');
});

app.get('/users/seed', async (req, res) => {
  try {
    await User.deleteMany({});
    await User.create(starterUsers);
    res.json(starterUsers);
  } catch (error) {
    console.log(`Something went wrong loading seed data: ${error.message}`);
    res.status(500).send(`Something went wrong loading seed data: ${error.message}`);
  }
});
app.get('/products/seedProduct', async (req, res) => {
    try {
      await Product.deleteMany({});
      await Product.create(seedProducts);
      res.json(seedProducts);
    } catch (error) {
      console.error(`Something went wrong while seeding products: ${error.message}`);
      res.status(500).json({ msg: `Error: ${error.message}` });
    }
  });
// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
