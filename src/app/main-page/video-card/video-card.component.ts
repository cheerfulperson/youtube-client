import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/shared/response.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() itemData: Item | null = null;

  @Output() itemDataChanged: EventEmitter<null> = new EventEmitter<null>();

  public closeWindow(): void {
    this.itemDataChanged.emit(null);
  }
}
