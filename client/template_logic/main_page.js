//main_page.js
Template.mainPage.onRendered(function(){
  scrollToPath();
  updateOnScroll();
});

function scrollToPath(){
  var path = Iron.Location.get().path.slice(1);
  if(path){
    var element = $("#" + path);
    if(element.length > 0){
      $(document).scrollTop(element.offset().top);
    }
  }
}

function updateOnScroll(){
  $(window).on('scroll', function(){
    if(Session.get('scrolling')) return;

    var products = $('.product');
    var scrollPosition = window.pageYOffset;
    var pastProducts = products.filter(function(index, element){
      return $(element).offset().top <= scrollPosition;
    });
    if(pastProducts.length > 0){
      var lastProduct = pastProducts[pastProducts.length - 1];
      var newPath = lastProduct.attributes['id'].value;
      var currentPath = location.pathname.slice(1);
      if(currentPath !== newPath){
        window.history.replaceState(newPath, "", "/" + newPath);
      }
    } else if(location.pathname.slice(1)){
      window.history.replaceState(newPath, "", "/");
    }
  });
}