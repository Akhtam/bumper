const express = require('express');
const router = express.Router();
const Business = require('../../models/Business');
const Service = require('../../models/Service');
const ObjectID = require('mongodb').ObjectID;
const validateBusinessEditInput = require('../../validation/businessEdit');

router.put('/edit/:id', (req, res) => {
	const { errors, isValid } = validateBusinessEditInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	Business.findById(ObjectID(req.params.id), (err, business) => {
		if (req.body._id) {
			delete req.body._id;
		}
		for (let i in req.body) {
			business[i] = req.body[i];
		}
		business.save().catch(err => console.log(err));
		res.json(business);
	});
});

router.get('/', (req, res) => {
	Business.find().then(businesses => res.json(businesses));
});

router.get('/:providerId', async (req, res) => {
	Business.findOne({ providerId: req.params.providerId }).then(business => {
		if(business.serviceIds.length === 0)  {
			res.json({
				business
			})
		}
		let services = [];
		let ids = 0;
		while (ids < business.serviceIds.length) {
			const id = business.serviceIds[ids];
			Service.findById(id).then(result => {
				services.push(result);
				if (services.length === business.serviceIds.length) {
					res.json({
						business: business,
						services: services
					});
				}
			});
			ids++;
		}
	});
});

module.exports = router;
