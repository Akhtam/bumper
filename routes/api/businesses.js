const express = require('express');
const router = express.Router();
const Business = require('../../models/Business');
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
		for (let b in req.body) {
			business[b] = req.body[b];
		}
		business.save().catch(err => console.log(err));
		res.json(business);
	});
});

router.get('/:providerId', (req, res) => {
	Business.findOne({ providerId: req.params.providerId }).then(business =>
		res.json({
			business: business
		})
	);
});

module.exports = router;

