const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: String,
  businessId: {
    type: Schema.Types.ObjectId,
    ref: "businesses"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Service = mongoose.model("Service", serviceSchema);
