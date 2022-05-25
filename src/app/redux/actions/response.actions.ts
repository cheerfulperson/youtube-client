import { Response } from '../../shared/response.model';

export enum EResponsesActions {
  GetResponse = '[Card] Get Response',
  GetResponseSuccess = '[Card] Get Response Success',
  GetResponses = '[Card] Get Responses',
  GetResponsesSuccess = '[Card] Get Responses Success',
  AddResponse = '[Card] Add Response',
  AddResponseSuccess = '[Card] Add Response Success',
}

export class AddResponse {
  public readonly type = EResponsesActions.AddResponse;

  constructor(public payload: Response) {}
}

export class AddResponseSuccess {
  public readonly type = EResponsesActions.AddResponseSuccess;

  constructor(public payload: Response) {}
}

export class GetResponse {
  public readonly type = EResponsesActions.GetResponse;

  constructor(public payload: string) {}
}

export class GetResponseSuccess {
  public readonly type = EResponsesActions.GetResponseSuccess;

  constructor(public payload: Response) {}
}

export class GetResponses {
  public readonly type = EResponsesActions.GetResponses;
}

export class GetResponsesSuccess {
  public readonly type = EResponsesActions.GetResponsesSuccess;

  constructor(public payload: Response[]) {}
}

export type ResponseActions =
  | AddResponse
  | AddResponseSuccess
  | GetResponse
  | GetResponseSuccess
  | GetResponses
  | GetResponsesSuccess;
