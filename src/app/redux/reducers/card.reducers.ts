import { ICardState, initialCardState } from '../states/card.state';
import { CardsActions, ECardsActions } from '../actions/card.action';

export const cardReducers = (
  state = initialCardState,
  action: CardsActions
): ICardState => {
  switch (action.type) {
    case ECardsActions.GetCardSuccess:
      return {
        ...state,
        selectedCard: action.payload,
      };
    case ECardsActions.GetCardsSuccess:
      return {
        ...state,
        cards: action.payload,
      };

    default:
      return state;
  }
};
