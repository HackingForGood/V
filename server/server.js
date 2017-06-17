require('dotenv').config();

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

import routes from './routes';
import schema from './graphql';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use('/graphql', graphqlHTTP(request => ({
  schema,
  graphiql: true,
  pretty: true,
  formatError: (error) => {
    console.log(error);
    return error;
  },
})));

app.get('/test', (req, res) => res.sendStatus(200));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
