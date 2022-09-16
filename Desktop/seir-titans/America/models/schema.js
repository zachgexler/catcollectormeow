const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    job: {type: String, required: true},
    img : {type: String, required: true},
    tasks: {type: Array, required: true},
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
