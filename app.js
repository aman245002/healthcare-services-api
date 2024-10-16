const express = require('express');
const mongoose = require('mongoose');
const services = require('./routes/services');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());  // <-- This is the important part

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/healthcare')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/api/services', services);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
