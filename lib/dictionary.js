//dictionary.js
orion.dictionary.addDefinition('title', 'site', {
  type: String,
  label: "Title"
});

orion.dictionary.addDefinition('description', 'site', {
  type: String,
  label: "Description"
});

orion.dictionary.addDefinition('mainImage', 'site',
  orion.attribute('image', {
    label: "Main Image"
  })
);

orion.dictionary.addDefinition('defaultColour', 'site', {
  type: String,
  autoform: {
    type: "bootstrap-colorpicker"
  },
  label: "Default background colour",
  optional: true
});