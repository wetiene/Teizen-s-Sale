//header.js
Template.header.events({
  'click .scroll-link': function(e){
    e.preventDefault();
    var path = e.currentTarget.attributes['href'].value;
    var product = $("#" + path);
    window.history.pushState(path, "", "/" + path);

    Session.set('scrolling', true);
    $('html, body').animate({
      scrollTop: product.offset().top
    }, 1000, function() { Session.set('scrolling', false);});
  },

  'click .navbar-brand': function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
});