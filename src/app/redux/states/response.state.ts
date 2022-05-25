import { Response } from '../../shared/response.model';

export interface IResponseState {
  responses: Response[] | null;
  selectedResponse: Response | null;
}

export const initialResponseState: IResponseState = {
  responses: null,
  selectedResponse: null,
};
