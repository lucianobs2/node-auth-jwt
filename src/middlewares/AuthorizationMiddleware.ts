import {
  IData,
  IMiddleware,
  IResponse,
} from '../application/interfaces/IMiddleware';

import { IRequest } from '../application/interfaces/IRequest';

export class AuthorizationMiddleware implements IMiddleware {
  constructor(private readonly allowedRoles: string[]) {}

  async handle({ account }: IRequest): Promise<IResponse | IData> {
    if (!account) {
      return {
        statusCode: 403, // Unauthorized
        body: {
          error: 'Access Denied.',
        },
      };
    }

    if (!this.allowedRoles.includes(account.role)) {
      return {
        statusCode: 403, // Unauthorized
        body: {
          error: 'Access Denied.',
        },
      };
    }

    return {
      data: {},
    };
  }
}
