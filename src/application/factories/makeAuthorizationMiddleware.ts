import { AuthorizationMiddleware } from '../../middlewares/AuthorizationMiddleware';

export function makeAuthorizationMiddleware(allowedRoles: string[]) {
  return new AuthorizationMiddleware(allowedRoles);
}
