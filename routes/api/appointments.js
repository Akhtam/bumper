const express = require("express");
const router = express.Router();
// const ObjectID = require("mongodb").ObjectID;
const validateAppointmentInput = require("../../validation/createAppointment");
const AppointmentMethods = require("../../models/Appointment");
const Appointment = AppointmentMethods.Appointment;

router.post("/create", (req, res) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  new Appointment({
    serviceId: req.body.serviceId,
    // vehicleId: req.body.vehicleId,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime
  })
    .save().then(appt => res.json(appt))
    .catch(err => console.log(err));
});

module.exports = router;
