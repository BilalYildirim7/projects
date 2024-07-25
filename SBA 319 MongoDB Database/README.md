/project-directory
│
├── /db
│   ├── conn.js
│   ├── seed.js
│   └── seedProducts.js
│
├── /models
│   ├── user.js
│   └── product.js
│
├── /routes
│   ├── users.js
│   └── products.js
│
├── .env
├── app.js
└── README.md

Server runs on http://localhost:3010.
API Endpoints
Users
GET /api/users: Get all users.
GET /api/users/
: Get a user by ID.
POST /api/users: Create a user.
PUT /api/users/
: Update a user.
DELETE /api/users/
: Delete a user.
Products
GET /api/products: Get all products.
GET /api/products/
: Get a product by ID.
POST /api/products: Create a product.
PUT /api/products/
: Update a product.
DELETE /api/products/
: Delete a product.
Seed Data
GET /seed/users: Seed users.
GET /seed/products: Seed products.
Data Validation
Users: Name, email, and color fields with validations.
Products: Name, price, category fields with validations.
Testing
Use Postman to test the API by sending requests to the endpoints above.
