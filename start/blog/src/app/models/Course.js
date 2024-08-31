const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    level: {type: String},
    slug: {type: String, slug: "name", unique: true},
    videoId: {type: String, required: true},
  }, {
    timestamps: true,  // tu dong tao ra 2 field la createdAt va updatedAt
  });

module.exports = mongoose.model('Course', Course); // Course la ten cua model, Course la schema
// Course se tu dong them s vao cuoi de tao ra collection trong db