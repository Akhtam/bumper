const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBusinessEditInput(data) {
  let errors = {};

    data.title = validText(data.title) ? data.title : "";
    data.location = validText(data.location) ? data.location : "";
    data.days = validText(data.days) ? data.days : "";
    data.hours = validText(data.hours) ? data.hours : "";

    if (Validator.isEmpty(data.title)) {
      errors.title = "Please enter the name of your business";
    }

    if (Validator.isEmpty(data.location)) {
      errors.location = "Please enter the location of your business";
    }

    if (Validator.isEmpty(data.days)) {
      errors.days = "You must select at least one day of operation";
    } //on frontend have checkboxes for days of the week and convert it to a string with format "Monday-Friday"

    if (Validator.isEmpty(data.hours)) {
      errors.location = "Please enter the hours of service for your business";
    } //on frontend use start and end-time selector from Akhtam's FSP

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
