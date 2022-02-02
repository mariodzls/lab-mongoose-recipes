const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const { find } = require('./models/Recipe.model');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(() => Recipe.syncIndexes())
  // .then(() => {
  //   Recipe
  //     .create({ title: 'Guacamole', cuisine: 'Mexican' })
  //     .then(elm => console.log(elm.title))
  //   Recipe
  //     .create(data)
  //     .then(elm => elm.forEach(element => console.log(element.title)))
  //     .catch(error => {
  //       console.error('Error connecting to the database', error);

  //     })
  // })
  .then(() =>
    Recipe
    .findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration: 100})
)
