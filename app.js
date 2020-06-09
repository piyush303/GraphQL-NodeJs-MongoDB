const express = require('express');
const bodyParser = require('body-parser');
const expressGraphql = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());


// app.use('/', (req, res, next) => {
//   res.send('Hello World');
// });


// Graph QL
app.use('/graphql', expressGraphql({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}))


const port = process.env.port || 5050;
// const port = 5050;
// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}
//   @cluster0-xkrqt.mongodb.net/${process.env.MONGO_DB}`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
//     console.log(err, db);
//     app.listen(`${port}`, () => {
//       console.log(`Server is running on port ${port}`)
//     });
//   })
mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
  console.log('Successfully connected to database');
  app.listen(`${port}`, () => {
    console.log(`Server is running on port ${port}`)
  });
})
