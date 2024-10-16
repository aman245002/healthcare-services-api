const mongoose = require('mongoose');

// Service Schema
const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 255
  },
  description: { 
    type: String, 
    required: true,
    minlength: 10,
    maxlength: 1000
  },
  price: { 
    type: Number, 
    required: true,
    min: 0
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
