import { Injectable } from '@angular/core';
import { Item, Response } from 'src/app/shared/response.model';
import { SearchHandlerService } from './search-handler.service';
import response from '../../../assets/response.json';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  public response: Response | undefined;

  constructor(private searchHandlerService: SearchHandlerService) {}

  public getResponseData(): void {
    this.response = response;
    this.searchHandlerService.insertResponse(this.response);
  }

  public getItemById(id: string): Item | null {
    if (!this.response) return null;

    return this.response.items.filter(
      (value: Item): boolean => value.id === id
    )[0];
  }
}
