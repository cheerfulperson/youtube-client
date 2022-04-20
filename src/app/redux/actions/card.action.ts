import { Action } from '@ngrx/store';
import { ICardInfo } from '../state.models';

export enum ECardsActions {
  GetCard = '[Card] Get Card',
  GetCardSuccess = '[Card] Get Card Success',
  GetCards = '[Card] Get Cards',
  GetCardsSuccess = '[Card] Get Cards Success',
}

export class GetCard implements Action {
  public readonly type = ECardsActions.GetCard;

  constructor(public payload: string) {}
}

export class GetCardSuccess implements Action {
  public readonly type = ECardsActions.GetCardSuccess;

  constructor(public payload: ICardInfo) {}
}

export class GetCards implements Action {
  public readonly type = ECardsActions.GetCards;
}

export class GetCardsSuccess implements Action {
  public readonly type = ECardsActions.GetCardsSuccess;

  constructor(public payload: ICardInfo[]) {}
}

export type CardsActions =
  | GetCard
  | GetCardSuccess
  | GetCards
  | GetCardsSuccess;
