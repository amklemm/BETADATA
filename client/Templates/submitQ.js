import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './submitQ.html';



Template.submitQ.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.submitQ.events({
  "click #submit": function(){
        var text = document.getElementById("textarea1").value;
        console.log(text);
        Questions.insert({ "question": text});


  },
});
