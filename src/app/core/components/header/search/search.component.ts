import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay, mapTo, Subject, Subscription } from 'rxjs';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';
import { SearchHandlerService } from 'src/app/core/services/search-handler.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private subscription?: Subscription;

  private debounceSubject: Subject<string> = new Subject<string>();

  public searchInputValue: string = '';

  public isUserTyping: boolean = false;

  public constructor(
    private fetchDataService: FetchDataService,
    private router: Router,
    private searchService: SearchHandlerService
  ) {}

  public fetchResponseResults(): void {
    this.isUserTyping = true;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.debounceSubject
      .pipe(mapTo(this.searchInputValue), delay(3000))
      .subscribe((data: string) => {
        this.isUserTyping = false;
        if (data.length >= 3) {
          this.fetchDataService.setResponseData(data);
        }
      });

    this.debounceSubject.next(this.searchInputValue);
  }

  public resetResponse(): void {
    this.searchService.deleteResponse();
    this.searchInputValue = '';
    this.router.navigateByUrl('');
  }
}
