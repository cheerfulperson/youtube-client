import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { cardReducers } from './card.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  cards: cardReducers,
};
