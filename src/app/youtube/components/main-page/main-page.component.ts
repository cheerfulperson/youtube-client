import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchHandlerService } from 'src/app/core/services/search-handler.service';
import { GetCards } from 'src/app/redux/actions/card.action';
import { GetResponses } from 'src/app/redux/actions/response.actions';
import { selectCardList } from 'src/app/redux/selectors/card.selectors';
import { selectResponseList } from 'src/app/redux/selectors/response.selectors';
import { ICardInfo } from 'src/app/redux/state.models';
import { IAppState } from 'src/app/redux/states/app.state';
import { Item } from '../../../shared/response.model';
import { YoutubeService } from '../../services/youtube.service';
import { ResultFilterPipe } from './shared/result-filter.pipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [ResultFilterPipe],
})
export class MainPageComponent implements OnInit {
  public videoItems: Item[] | undefined;

  public filterString: string = '';

  public cards = (<Store<IAppState>>this.store).select<ICardInfo[]>(
    selectCardList
  );

  public responses = (<Store<IAppState>>this.store).select(selectResponseList);

  public constructor(
    public searchHandlerService: SearchHandlerService,
    private youtubeService: YoutubeService,
    private store: Store
  ) {
    this.youtubeService.response$.subscribe((res: Item[] | undefined) => {
      this.store.dispatch(new GetResponses());
      this.videoItems = res;
    });

    this.searchHandlerService.filterStringChanged$.subscribe((str: string) => {
      this.filterString = str;
    });
  }

  public ngOnInit(): void {
    this.videoItems = this.youtubeService.responseItems;
    this.store.dispatch(new GetCards());
  }
}
