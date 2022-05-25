import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap } from 'rxjs';
import { Response } from 'src/app/shared/response.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { GetCard, GetCards } from '../actions/card.action';
import {
  AddResponse,
  AddResponseSuccess,
  EResponsesActions,
  GetResponsesSuccess,
  GetResponseSuccess,
} from '../actions/response.actions';
import { selectResponseList } from '../selectors/response.selectors';
import { IAppState } from '../states/app.state';

@Injectable()
export class ResponseEffects {
  public getResponse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetCard>(EResponsesActions.GetResponse),
      map((action) => action.payload),
      concatLatestFrom(() =>
        (<Store<IAppState>>this.store).select(selectResponseList)
      ),
      switchMap(([id, response]) => {
        const selectedResponse = response.filter(
          (value: Response) => value.etag === id
        )[0];
        return of(new GetResponseSuccess(selectedResponse));
      })
    );
  });

  public addResponse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EResponsesActions.AddResponse),
      switchMap((action: AddResponse) =>
        this.service
          .addResponse(action.payload)
          .pipe(map((res: Response) => new AddResponseSuccess(res)))
      )
    );
  });

  public getRespnses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetCards>(EResponsesActions.GetResponses),
      switchMap(() => {
        return this.service.getResponses().pipe(
          switchMap((res: Response[]) => {
            return of(new GetResponsesSuccess(res));
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
