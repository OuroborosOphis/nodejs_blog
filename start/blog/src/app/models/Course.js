const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
  });

module.exports = mongoose.model('Course', Course); // Course la ten cua model, Course la schema
// Course se tu dong them s vao cuoi de tao ra collection trong db