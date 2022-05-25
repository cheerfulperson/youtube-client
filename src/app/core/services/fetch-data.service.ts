import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AddResponse } from 'src/app/redux/actions/response.actions';

import { Item, Response } from 'src/app/shared/response.model';
import { SearchHandlerService } from './search-handler.service';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(
    private searchHandlerService: SearchHandlerService,
    private httpService: HttpClient,
    private store: Store
  ) {}

  public setResponseData(query: string): void {
    this.getResponseData(query).subscribe((data: Response) => {
      this.searchHandlerService.insertResponse(data);
      this.store.dispatch(new AddResponse(data));
    });
  }

  public getResponseData(query: string): Observable<Response> {
    return this.httpService.get<Response>(`/search`, {
      params: new HttpParams()
        .set('type', 'video')
        .set('maxResults', '15')
        .set('part', 'snippet')
        .set('q', query),
    });
  }

  public getVideoById(id: string): Observable<Item | null> {
    return this.httpService
      .get<Response>('videos', {
        params: new HttpParams()
          .set('id', id)
          .set('part', 'snippet,statistics'),
      })
      .pipe(map((data: Response) => data.items[0]));
  }
}
