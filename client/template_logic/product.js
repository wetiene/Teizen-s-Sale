//product.js
Template.product.helpers({
  background: function(){
    if(this.images.length > 0){
      return "background-image: url(" + this.images[0].url + ")";
    }
  },
  hasBackgroundImage: function(){
    return !!this.images;
  },
  hasBadge: function(){
    return !!this.badge;
  },
  listImages: function(){
    listOfImages = "";
    console.log(this.images.length);
    for (i = 0; i < this.images.length; i++) { 
      listOfImages += "<img src=\""+this.images[i].url+"\"><br>\n";
    }
    console.log(listOfImages);
    return listOfImages;
  },
});