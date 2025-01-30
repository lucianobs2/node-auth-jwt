/* eslint-disable @typescript-eslint/no-explicit-any */

import { IRole } from './IRole';

export interface IRequest {
  body: Record<string, any>;
  params: Record<string, string>;
  headers: Record<string, string>;
  account?: {
    id: string;
    role: IRole;
  };
}
