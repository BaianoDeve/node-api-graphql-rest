import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { router } from './routes';
import { schema } from '@/resolvers';

const app = express();

app.use(express.json());
app.use(router);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error' });
    }

    return response.status(500).json(error);
  }
);

export { app };
