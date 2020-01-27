const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const Service = require('../../models/Service');
const Business = require('../../models/Business');
const validateServiceInput = require('../../validation/createService');

router.post('/create', (req, res) => {
	const { errors, isValid } = validateServiceInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	new Service({
		type: req.body.type,
		price: req.body.price,
		description: req.body.description,
		businessId: ObjectID(req.body.businessId)
	})
		.save()
		.then(service => {
			Business.findById(req.body.businessId, (err, business) => {
				business.serviceIds.push(ObjectID(service.id));
				business.save();
			});
			res.json(service);
		})
		.catch(err => res.status(404).json);
});

//services index for owners search
router.get('/', (req, res) => {
	Service.find()
		.then(services => res.json(services))
		.catch(err => res.status(404).json('No services found'));
});

router.put('/edit/:id', (req, res) => {
	const { errors, isValid } = validateServiceInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	Service.findById(ObjectID(req.params.id), (err, service) => {
		if (req.body._id) {
			delete req.body._id;
		}
		for (let i in req.body) {
			service[i] = req.body[i];
		}
		service.save().catch(err => console.log(err));
		res.json(service);
	});
});

router.delete("/delete/:id", (req, res) => {
  Service.findById(req.params.id).then(service => {
    const businessId = service.businessId;
    const serviceId = service.id;
    Service.findOneAndDelete(service.id).then(service => {
      Business.findById(businessId).then(business => {
        business.serviceIds.remove(serviceId);
        business.save();
        res.json(business);
      });
    })
  });
});

module.exports = router;
