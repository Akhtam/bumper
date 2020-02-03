const express = require('express');
const router = express.Router();
const Business = require('../../models/Business');
const Service = require('../../models/Service');
const ObjectID = require('mongodb').ObjectID;
const validateBusinessEditInput = require('../../validation/businessEdit');
const Vehicles = require('./vehicle_seeds');

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

router.get('/:providerId', (req, res) => {
	const apps = [
		{
			serviceId: ObjectID('5e38ab65d4019e02c0894202'),
			businessId: ObjectID('5e3867fb2bdf345bcd0c18b2'),
			vehicle: Vehicles.vehicle1,
			date: '2020-02-07',
			startTime: '1:00 pm',
			endTime: '1:30 pm',
			confirmed: true,
			done: false
		},
		{
			serviceId: ObjectID('5e38ab65d4019e02c0894202'),
			businessId: ObjectID('5e3867fb2bdf345bcd0c18b2'),
			vehicle: Vehicles.vehicle2,
			date: '2020-01-31',
			startTime: '12:00 pm',
			endTime: '12:30 pm',
			confirmed: false,
			done: false
		},
		{
			serviceId: ObjectID('5e38ab65d4019e02c0894202'),
			businessId: ObjectID('5e3867fb2bdf345bcd0c18b2'),
			vehicle: Vehicles.vehicle3,
			date: '2020-01-31',
			startTime: '12:30 pm',
			endTime: '1:00 pm',
			confirmed: false,
			done: false
		},
		{
			serviceId: ObjectID('5e38ab65d4019e02c0894202'),
			businessId: ObjectID('5e3867fb2bdf345bcd0c18b2'),
			vehicle: Vehicles.vehicle4,
			date: '2020-02-03',
			startTime: '1:00 pm',
			endTime: '1:30 pm',
			confirmed: false,
			done: false
		}
	];

	Business.findOne({ providerId: req.params.providerId }).then(business => {
		const appointments = business._id.equals(ObjectID('5e3867fb2bdf345bcd0c18b2'))
			? apps
			: [];
		if (business.serviceIds.length === 0) {
			res.json({
				business
			});
		} else {

			let services = [];
			let ids = 0;
			while (ids < business.serviceIds.length) {
				const id = business.serviceIds[ids];
				Service.findById(id).then(result => {
					services.push(result);
					
					if (services.length === business.serviceIds.length) {

						res.json({
							business: business,
							services: services,
							appointments
						});
					}
				});
				ids++;
			}
		}
	});
});

module.exports = router;
