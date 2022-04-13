import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Item, Response } from 'src/app/shared/response.model';
import { SearchHandlerService } from './search-handler.service';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(
    private searchHandlerService: SearchHandlerService,
    private httpService: HttpClient
  ) {}

  public setResponseData(query: string): void {
    this.httpService
      .get<Response>(`/search`, {
        params: new HttpParams()
          .set('type', 'video')
          .set('maxResults', '15')
          .set('part', 'snippet')
          .set('q', query),
      })
      .subscribe((data: Response) => {
        this.searchHandlerService.insertResponse(data);
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
