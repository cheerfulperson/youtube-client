import { Injectable } from '@angular/core';
import { SearchHandlerService } from './search-handler.service';
import response from '../../assets/response.json';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private searchHandlerService: SearchHandlerService) {}

  public getResponseData(): void {
    this.searchHandlerService.insertResponse(response);
  }
}
