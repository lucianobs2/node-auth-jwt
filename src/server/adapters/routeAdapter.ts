import { Request, Response } from 'express';
import { IController } from '../../application/interfaces/IController';

export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    if (!request.metadata) {
      console.log(request.metadata);
      const { body, statusCode } = await controller.handle({
        body: request.body,
        params: request.params,
      });

      response.status(statusCode).json({
        message: body,
      });
    } else {
      console.log(request.metadata.accountId);

      const { body, statusCode } = await controller.handle({
        body: request.body,
        params: request.params,
        accountId: request.metadata.accountId,
      });

      response.status(statusCode).json({
        message: body,
      });
    }
  };
}
