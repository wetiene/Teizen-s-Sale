//router.js
Router.configure({
  loadingTemplate: "loading",
  waitOn: function(){
    return Meteor.subscribe("productsPub");
  },
  onAfterAction: function(){
    document.title = orion.dictionary.get('site.title', 'Website');
  }
});

Router.route("/", {
  controller: 'MainController'
});

Router.route("/:path", {
  controller: 'MainController'
});

Router.route("/:file", {
  controller: 'file'
});

MainController = RouteController.extend({
  template: 'mainPage',
  layoutTemplate: 'layout',
  data: function(){
    return {products: Products.find({}, {sort: {order: 1}})};
  }
});