import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { SearchHandlerService } from 'src/app/core/services/search-handler.service';
import { ICardInfo } from 'src/app/redux/state.models';
import { Item, Response } from 'src/app/shared/response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public responseItems: Item[] | undefined;

  private responseSource = new Subject<Item[] | undefined>();

  public response$ = this.responseSource.asObservable();

  public responses: Response[] = [];

  private createdCards: ICardInfo[] = [];

  public constructor(private searchService: SearchHandlerService) {
    this.searchService.responseAnnounced$.subscribe(
      (data: Item[] | undefined) => {
        this.responseItems = data;
        this.responseSource.next(data);
      }
    );
  }

  public addResponse(res: Response): Observable<Response> {
    this.responses = [res, ...this.responses];
    return of(res);
  }

  public getResponses(): Observable<Response[]> {
    return of(this.responses);
  }

  public addCard(card: ICardInfo): Observable<ICardInfo> {
    this.createdCards = [card, ...this.createdCards];
    return of(card);
  }

  public getCards(): Observable<ICardInfo[]> {
    return of(this.createdCards);
  }
}
