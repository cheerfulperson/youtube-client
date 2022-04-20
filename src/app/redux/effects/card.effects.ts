import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { ECardsActions, GetCard, GetCardSuccess } from '../actions/card.action';
import { selectCardList } from '../selectors/card.selectors';
import { ICardInfo } from '../state.models';
import { IAppState } from '../states/app.state';

@Injectable()
export class CardEffects {
  public getCard$ = createEffect(() => {
    return this.action$.pipe(
      ofType<GetCard>(ECardsActions.GetCard),
      map((action) => action.payload),
      withLatestFrom(this.store.pipe(select(selectCardList))),
      switchMap(([id, cards]) => {
        const selectedCard = cards.filter(
          (value: ICardInfo) => value.id === id
        )[0];
        return of(new GetCardSuccess(selectedCard));
      })
    );
  });

  public constructor(
    private action$: Actions,
    private store: Store<IAppState>
  ) {}
}
