//product.js
Template.product.helpers({
  background: function(){
    if(this.images.length > 0){
      if(this.images.length >= 2){
        return "background-image: url(" + this.images[1].url + ")";
      }
      return "background-image: url(" + this.images[0].url + ")";
    }
  },
  hasBackgroundImage: function(){
    return !!this.images;
  },
  hasBadge: function(){
    return !!this.badge;
  },
});