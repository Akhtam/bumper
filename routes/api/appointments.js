const express = require("express");
const router = express.Router();
// const ObjectID = require("mongodb").ObjectID;
const validateAppointmentInput = require("../../validation/createAppointment");
// const AppointmentMethods = require("../../models/Appointment");
// const Appointment = AppointmentMethods.Appointment;
const User = require("../../models/User");
const Service = require("../../models/Service");
const Business = require("../../models/Business");

router.post("/create", (req, res) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const appointment = {
    serviceId: req.body.serviceId,
    businessId: req.body.businessId,
    vehicle: req.body.vehicle,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime
  };

  User.findById(req.body.userId).then(user => {
      user.appointments.push(appointment);
      Business.findById(appointment.businessId).then(business => {
        User.findById(business.providerId).then(user2 => {
          user2.appointments.push(appointment);
          user2.save();
        });
      });
      user
        .save()
        .then(appointment => res.json(appointment))
        .catch(err => console.log(err));
    })

});

module.exports = router;
