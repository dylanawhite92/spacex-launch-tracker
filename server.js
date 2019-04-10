const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

// Initialize express
const app = express();

// Route that points to GraphQL schema and GraphiQL browser IDE
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Use environment port in deployment, otherwise port 5000 in developement
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));