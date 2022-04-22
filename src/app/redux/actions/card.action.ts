import { ICardInfo } from '../state.models';

export enum ECardsActions {
  GetCard = '[Card] Get Card',
  GetCardSuccess = '[Card] Get Card Success',
  GetCards = '[Card] Get Cards',
  GetCardsSuccess = '[Card] Get Cards Success',
  AddCard = '[Card] Add Card',
  AddCardSuccess = '[Card] Add Card Success',
}

export class AddCard {
  public readonly type = ECardsActions.AddCard;

  constructor(public payload: ICardInfo) {}
}

export class AddCardSuccess {
  public readonly type = ECardsActions.AddCardSuccess;

  constructor(public payload: ICardInfo) {}
}

export class GetCard {
  public readonly type = ECardsActions.GetCard;

  constructor(public payload: string) {}
}

export class GetCardSuccess {
  public readonly type = ECardsActions.GetCardSuccess;

  constructor(public payload: ICardInfo) {}
}

export class GetCards {
  public readonly type = ECardsActions.GetCards;
}

export class GetCardsSuccess {
  public readonly type = ECardsActions.GetCardsSuccess;

  constructor(public payload: ICardInfo[]) {}
}

export type CardsActions =
  | AddCard
  | AddCardSuccess
  | GetCard
  | GetCardSuccess
  | GetCards
  | GetCardsSuccess;
