import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item, Response } from 'src/app/shared/response.model';
import { SearchHandlerService } from './search-handler.service';
import response from '../../../assets/response.json';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  public response: Response | undefined;

  constructor(
    private searchHandlerService: SearchHandlerService,
    private httpService: HttpClient
  ) {}

  public setResponseData(query: string): void {
    this.response = response;
    this.httpService
      .get<Response>(`https://www.googleapis.com/youtube/v3/search`, {
        params: new HttpParams()
          .set('type', 'video')
          .set('maxResults', '15')
          .set('q', query),
      })
      .subscribe((data: Response) => {
        this.searchHandlerService.insertResponse(data);
      });
  }

  public getItemById(id: string): Item | null {
    if (!this.response) return null;

    return this.response.items.filter(
      (value: Item): boolean => value.id === id
    )[0];
  }
}
