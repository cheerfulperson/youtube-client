import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchHandlerService } from 'src/app/core/services/search-handler.service';
import { Item } from 'src/app/shared/response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public responseItems: Item[] | undefined;

  private responseSource = new Subject<Item[] | undefined>();

  public response$ = this.responseSource.asObservable();

  public constructor(private searchService: SearchHandlerService) {
    this.searchService.responseAnnounced$.subscribe(
      (data: Item[] | undefined) => {
        this.responseItems = data;
        this.responseSource.next(data);
      }
    );
  }
}
