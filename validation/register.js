const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.email = validText(data.email) ? data.email : "";
  data.role = validText(data.role) ? data.role : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (data.role === "Provider") {
    data.title = validText(data.title) ? data.title : "";
    data.location = validText(data.location) ? data.location : "";
    data.days = validText(data.days) ? data.days : "";

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
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = "You must select a role before continuing";
  }
  
  if (!Validator.contains(data.name, " ")) {
    errors.name = "Please enter a first and last name";
  }

  const nameParts = data.name.split(" ");
  nameParts.map(part => {
    if (!Validator.isAlpha(part)) {
      errors.name = "Name cannot contain numbers or special characters";
    }
  })

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
