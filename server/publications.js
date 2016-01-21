//publications.js
Meteor.publish('productsPub', function(){
  return Products.find();
});