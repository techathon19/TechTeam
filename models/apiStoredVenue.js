const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
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

const APIStoredVenue = mongoose.model('APIVenue', VenueSchema);

module.exports = APIStoredVenue;