//product.js
Products = new orion.collection('products', {
  singularName: 'product',
  pluralName: 'products',
  link: {
    title: 'Products'
  },
  tabular: {
    columns: [
      {data: 'order', title: 'Page order', width: '20%'},
      {data: 'name', title: 'Name'},
      {data: 'category', title: 'Category'},
      {data: 'sold', title: 'Sold'}
    ]
  }
});

Products.attachSchema(new SimpleSchema({
  
  id: {
    type: String,
    label: "Procut Id"
  },
  name: {
    type: String,
    label: "Product Name"
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    autoform: {
      type: 'textarea',
    }
  },
  order: {
    type: Number,
    label: "Product Order"
  },
  price: {
    type: String,
    label: "Product Price"
  },
  category: {
    type: String,
    label: "Product Category",
    allowedValues: ['Entretenimento','Eletrodomésticos','Cozinha','Sala', 'Quarto', 'Eletrônicos','Banheiro','Roupas']
  },
  external_link: {
    type: String,
    label: "External Link",
    optional:true,
  },
  badge_sold: {
    label: "Badge Sold",
    type: Boolean,
  },
  badge_sale: {
    label: "Badge Sale",
    type: Boolean,
  },
  images: orion.attribute('images', {
    label: "Product Images",
  })
}));