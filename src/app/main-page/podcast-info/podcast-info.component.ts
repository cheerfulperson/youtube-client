import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/response.model';

@Component({
  selector: 'app-podcast-info',
  templateUrl: './podcast-info.component.html',
  styleUrls: ['./podcast-info.component.scss'],
})
export class PodcastInfoComponent {
  @Input() public statistics: Item['statistics'] | undefined;
}
