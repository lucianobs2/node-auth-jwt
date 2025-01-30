import { Request, Response } from 'express';
import { IController } from '../../application/interfaces/IController';
import { IAccount } from '../../application/interfaces/IAccount';

export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    const { body, statusCode } = await controller.handle({
      body: request.body,
      params: request.params,
      headers: request.headers as Record<string, string>,
      account: request.metadata?.account as IAccount,
    });

    response.status(statusCode).json({
      message: body,
    });
  };
}
