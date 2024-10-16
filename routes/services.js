const express = require('express');
const Service = require('../models/service');
const router = express.Router();

// POST: Add a new service
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).send('All fields are required');
  }

  let service = new Service({ name, description, price });
  service = await service.save();
  res.send(service);
});

// GET: Retrieve all services
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.send(services);
});

// PUT: Update an existing service
router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;

  const service = await Service.findByIdAndUpdate(req.params.id, { name, description, price }, { new: true });

  if (!service) return res.status(404).send('Service not found');
  res.send(service);
});

// DELETE: Remove a service
// DELETE: Remove a service
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) return res.status(404).send('Service not found');
    res.send(service);
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});


module.exports = router;
