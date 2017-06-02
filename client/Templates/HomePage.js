import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './HomePage.html';
Questions = new Mongo.Collection('questions');

// Template.myAtForm.replaces("atForm");

Template.body.helpers({
    isLoggedIn() {
        return (Meteor.user()?true:false);
    },
});

Template.body.events({
  "click #foo": function(evt, template){

  }
});
Template.body.Rendered = function(){

};
