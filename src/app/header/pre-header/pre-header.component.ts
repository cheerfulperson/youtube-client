import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss'],
})
export class PreHeaderComponent {
  public sortingList: string[] = [
    'date',
    'count of views',
    'by word or sentance',
  ];

  public choice: string = 'by word or sentance';

  public changeChoice(newChoice: string): void {
    this.choice = newChoice;
  }
}
