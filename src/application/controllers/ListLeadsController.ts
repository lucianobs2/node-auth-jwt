import { IController, IResponse } from '../interfaces/IController';
import { IRequest } from '../interfaces/IRequest';

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    console.log(request);

    return {
      statusCode: 200,
      body: {
        leads: [
          {
            id: '1',
            name: 'Zezão',
          },
          {
            id: '2',
            name: 'Alberto',
          },
          {
            id: '3',
            name: 'Luciano',
          },
        ],
      },
    };
  }
}
