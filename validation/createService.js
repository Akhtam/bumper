const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateServiceInput(data) {
  let errors = {};

  data.type = validText(data.type) ? data.type : "";
  data.price = validText(data.price) ? data.price : "";
  data.description = validText(data.description) ? data.description : "";

  if (Validator.equals(data.type, "SELECT")) {
    errors.type = "You must select a service type";
  } //dropdown menu with types of services

  if (Validator.isEmpty(data.price)) {
    errors.price = "Please enter a price for this service";
  }

  if (!Validator.isCurrency(data.price)) {
    errors.price = "Enter a price using the format: $24.99";
  }

  if (!Validator.isLength(data.description, { min: 0, max: 500 })) {
    errors.description = "Service description cannot exceed 500 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
