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
  hours: {
    type: String,
    required: true
  },
  serviceIds: {
    type: Array,
    required: true
  },
  providerId: {
    type: Integer,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Business = mongoose.model("Business", businessSchema);
