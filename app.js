const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const businesses = require('./routes/api/businesses');
const services = require('./routes/api/services');
const appointments = require('./routes/api/appointments');
const path = require('path');

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/build'));
	app.get('/', (req, res) => {
		res.sendFile(
			path.resolve(__dirname, 'frontend', 'build', 'index.html')
		);
	});
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/businesses', businesses);
app.use('/api/services', services);
app.use('/api/appointments', appointments);
