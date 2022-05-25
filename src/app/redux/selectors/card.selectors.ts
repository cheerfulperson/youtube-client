import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { ICardState } from '../states/card.state';

const selectUsers = (state: IAppState): ICardState => state.cards;

export const selectCardList = createSelector(
  selectUsers,
  (state: ICardState) => state.cards || []
);

export const selectSelectedCard = createSelector(
  selectUsers,
  (state: ICardState) => state.selectedCard
);
