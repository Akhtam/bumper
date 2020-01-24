const mongoose = require("mongoose");
const Schema = mongoose.Schema;

appointmentSchema = new Schema({
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "services"
  },
//   vehicleId: {
//     type: Schema.Types.ObjectId,
//     ref: "vehicles"
//   },
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  done: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
    Appointment: mongoose.model("Appointment", appointmentSchema),
    appointmentSchema: appointmentSchema
};
