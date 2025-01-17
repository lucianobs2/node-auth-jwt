import express from 'express';
import { makeSignUpController } from '../application/factories/makeSignUpController';
import { makeSignInController } from '../application/factories/makeSignInController';

const app = express();
app.use(express.json());

app.post('/sign-up', async (request, response) => {
  const signUpController = makeSignUpController();

  const { body, statusCode } = await signUpController.handle({
    body: request.body,
  });

  response.status(statusCode).json({
    message: body,
  });
});

app.post('/sign-in', async (request, response) => {
  const signInController = makeSignInController();

  const { body, statusCode } = await signInController.handle({
    body: request.body,
  });

  response.status(statusCode).json({
    message: body,
  });
});

app.listen(3001, () => {
  console.log('⭐ Server is running on http://localhost:3001 ⭐');
});
