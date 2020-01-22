const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
const Service = require("../../models/Service");
const Business = require("../../models/Business");
const validateServiceInput = require("../../validation/createService");

router.post("/create", (req, res) => {
    const { errors, isValid } = validateServiceInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    new Service ({
      type: req.body.type,
      price: req.body.price,
      description: req.body.description,
      businessId: ObjectID(req.body.businessId)
    }).save().then(service => {
        Business.findById(req.body.businessId, (err, business) => {
            business.serviceIds.push(ObjectID(service.id));
            business.save();
        })
        res.json({service})
    }).catch(err => console.log(err));
})

router.get("/", (req, res) => {
    Service.find()
        .then(services => res.json(services))
        .catch(err => res.status(404).json("No services found"))
})

module.exports = router;