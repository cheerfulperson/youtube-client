import { RouterReducerState } from '@ngrx/router-store';
import { ICardState, initialCardState } from './card.state';

export interface IAppState {
  router?: RouterReducerState;
  cards: ICardState;
}

export const initialAppState = {
  cards: initialCardState,
};

export function getInitialAppState(): IAppState {
  return initialAppState;
}
