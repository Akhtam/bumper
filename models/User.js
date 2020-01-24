const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AppointmentMethods = require("../models/Appointment");
const appointmentSchema = AppointmentMethods.appointmentSchema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  appointments: [appointmentSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("User", userSchema);
