import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './form.html';
Template.questionForm.helpers({
  'question': function() {
    var howManyDocs = Questions.find().count();
    var randomNumber = Math.floor(Math.random(howManyDocs));

    return Questions.find().skip(randomNumber).question;

  },
});

Template.questionForm.events({
  "click #foo": function(event, template){

  }
});
