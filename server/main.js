import { Meteor } from 'meteor/meteor';
Questions = new Mongo.Collection('questions');
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('questions', function() {
    return Questions.find();
});
