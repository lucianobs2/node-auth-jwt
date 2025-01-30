import express from 'express';
import { routeAdapter } from './adapters/routeAdapter';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { makeSignUpController } from '../application/factories/makeSignUpController';
import { makeSignInController } from '../application/factories/makeSignInController';
import { makeListLeadsController } from '../application/factories/makeListLeadsController';
import { makeAuthenticationMiddleware } from '../application/factories/makeAuthenticationMiddleware';
import { makeAuthorizationMiddleware } from '../application/factories/makeAuthorizationMiddleware';

const app = express();
app.use(express.json());

app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

app.get(
  '/leads',
  Object(middlewareAdapter(makeAuthenticationMiddleware())),
  routeAdapter(makeListLeadsController())
);

app.post(
  '/leads',
  Object(middlewareAdapter(makeAuthenticationMiddleware())),
  Object(middlewareAdapter(makeAuthorizationMiddleware(['ADMIN']))),
  (request, response) => {
    response.json({ created: true });
  }
);

app.listen(3001, () => {
  console.log('⭐ Server is running on http://localhost:3001 ⭐');
});
