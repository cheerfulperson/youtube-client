import { Component } from '@angular/core';
import { delay, mapTo, Subject, Subscription } from 'rxjs';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';

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

  public constructor(private fetchDataService: FetchDataService) {}

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
}
