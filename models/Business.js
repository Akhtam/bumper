const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  days: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true 
  },
  serviceIds: [{
    type: Schema.Types.ObjectId,
    ref: 'services',
  }],
  providerId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Business = mongoose.model("Business", businessSchema);
