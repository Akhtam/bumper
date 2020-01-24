const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateAppointmentInput(data) {
  let errors = {};

  data.date = validText(data.date) ? data.date : "";
  data.startTime = validText(data.startTime) ? data.startTime : "";
  data.endTime = validText(data.endTime) ? data.endTime : "";

  if (Validator.isEmpty(data.date)) {
    errors.date = "You must select a date";
  } 

  if (Validator.isEmpty(data.startTime)) {
    errors.startTime = "Please select a start time";
  }

  if (Validator.isEmpty(data.endTime)) {
    errors.endTime = "Please select an end time";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
