import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';



import './navBar.html';
import './logout.html';


Template.navBar.helpers({
  template_loaded() {
      return Session.get('template_loaded');
  },
});

Template.navBar.events({
  "click #new-project": function(evt, template){
            evt.preventDefault();
            Session.set("template_loaded", "submitQ");


  },
  "click #discover": function(evt,template){
            evt.preventDefault();
            Session.set("template_loaded", "questionForm");

  }
});
