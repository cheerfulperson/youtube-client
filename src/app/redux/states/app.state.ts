import { RouterReducerState } from '@ngrx/router-store';
import { ICardState, initialCardState } from './card.state';
import { initialResponseState, IResponseState } from './response.state';

export interface IAppState {
  router?: RouterReducerState;
  cards: ICardState;
  responses: IResponseState;
}

export const initialAppState = {
  cards: initialCardState,
  responses: initialResponseState,
};

export function getInitialAppState(): IAppState {
  return initialAppState;
}
