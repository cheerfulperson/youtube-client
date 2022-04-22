import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import {
  AddCard,
  AddCardSuccess,
  ECardsActions,
  GetCard,
  GetCards,
  GetCardsSuccess,
  GetCardSuccess,
} from '../actions/card.action';
import { selectCardList } from '../selectors/card.selectors';
import { ICardInfo } from '../state.models';
import { IAppState } from '../states/app.state';

@Injectable()
export class CardEffects {
  public getCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetCard>(ECardsActions.GetCard),
      map((action) => action.payload),
      concatLatestFrom(() =>
        (<Store<IAppState>>this.store).select(selectCardList)
      ),
      switchMap(([id, cards]) => {
        const selectedCard = cards.filter(
          (value: ICardInfo) => value.id === id
        )[0];
        return of(new GetCardSuccess(selectedCard));
      })
    );
  });

  public addCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECardsActions.AddCard),
      switchMap((action: AddCard) =>
        this.service
          .addCard(action.payload)
          .pipe(map((card: ICardInfo) => new AddCardSuccess(card)))
      )
    );
  });

  public getCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetCards>(ECardsActions.GetCards),
      switchMap(() => {
        return this.service.getCards().pipe(
          switchMap((cards: ICardInfo[]) => {
            return of(new GetCardsSuccess(cards));
          })
        );
      })
    );
  });

  public constructor(
    private actions$: Actions,
    private store: Store,
    private service: YoutubeService
  ) {}
}
