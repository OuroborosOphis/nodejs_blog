const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
// thu vien tu dong tang id 
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    _id: {type: Number, },
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    level: {type: String},
    slug: {type: String, slug: "name", unique: true},
    videoId: {type: String, required: true},
  }, {
    _id: false, // khong tao ra field _id
    timestamps: true,  // tu dong tao ra 2 field la createdAt va updatedAt
  });

// Custom query helpers
CourseSchema.query.sortable = function(req) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : 'desc',
    });
  }
  return this;
};

// Add plugin
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement); // tu dong tang id

CourseSchema.plugin(mongooseDelete, {  
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema); // Course la ten cua model, Course la schema
// Course se tu dong them s vao cuoi de tao ra collection trong db