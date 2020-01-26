const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const AppointmentMethods = require("../models/Appointment");
// const appointmentSchema = AppointmentMethods.appointmentSchema;

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
  appointments: [
    {
      serviceId: { type: Schema.Types.ObjectId, ref: "services" },
      // vehicleId: { type: Schema.Types.ObjectId, ref: "vehicles" },
      date: Date,
      startTime: String,
      endTime: String,
      confirmed: { type: Boolean, default: false },
      done: { type: Boolean, default: false }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("User", userSchema);
