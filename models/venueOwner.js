const mongoose = require('mongoose');

const VenueOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
      type: String,
      required: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfAdded: {
    type: Date,
    default: Date.now
  }
});

const VenueOwner = mongoose.model('VenueOwner', VenueOwnerSchema);

module.exports = VenueOwner;