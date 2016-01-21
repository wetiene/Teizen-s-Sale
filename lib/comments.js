//comments.js
Comments = new orion.collection('comments', {
  singularName: 'comment', // The name of one of these items
  pluralName: 'comments', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Comments' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      { 
        data: "author", 
        title: "Author" 
      },{ 
        data: "productId", 
        title: "Product ID" 
      },{ 
        data: "submitted", 
        title: "Submitted" 
      },
    ]
  }
});

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      productId: String,
      body: String
    });

    var user = Meteor.user();
    var product = Products.findOne(commentAttributes.productId);

    if (!product)
      throw new Meteor.Error('invalid-comment', 'You must comment on a product');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the product with the number of comments
    Products.update(comment.productId, {$inc: {commentsCount: 1}});

    // create the comment, save the id
    comment._id = Comments.insert(comment);

    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);

    return comment._id;
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Comments.attachSchema(new SimpleSchema({
  postId: {
    type: String,
    optional: false,
    label: 'Post ID'
  },
  userId: {
    type: String,
    optional: false,
    label: 'User ID',
  },
  author: {
    type: String,
    optional: false,
  },
  submitted: {
    type: Date,
    optional: false,
  },
  body: orion.attribute('summernote', {
    label: 'Body'
  }),
}));