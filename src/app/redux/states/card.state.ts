import { ICardInfo } from '../state.models';

export interface ICardState {
  cards: ICardInfo[] | null;
  selectedCard: ICardInfo | null;
}

export const initialCardState: ICardState = {
  cards: null,
  selectedCard: null,
};
