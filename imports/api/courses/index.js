import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Courses = new Mongo.Collection('Courses');
export default Courses;

Courses.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Courses.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Courses.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the course.',
  },
  body: {
    type: String,
    label: 'The body of the course.',
  },
});

Courses.attachSchema(Courses.schema);

Factory.define('course', Courses, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
