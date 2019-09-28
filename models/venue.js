const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  venueName: {
    type: String,
    required: true
  },
  location: {
    city: {
        type: String,
        required: true
      },
    zip: {
        type: String,
        required: true
      },
    address: {
        type: String,
        required: true
    }
  },

  timing: [{
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
  }],
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;