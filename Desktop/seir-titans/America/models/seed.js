const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
	job: { type: String, required: true },
	tasks: { type: String, required: true },
	completed: Boolean,
});

const staff = mongoose.model('Staff', staffSchema);

module.exports = staff;