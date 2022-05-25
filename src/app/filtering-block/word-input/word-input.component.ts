import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchHandlerService } from 'src/app/shared/search-handler.service';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss'],
})
export class WordInputComponent implements OnInit {
  @Input() public choice: string = '';

  @Output() public choiceChanged: EventEmitter<string> =
    new EventEmitter<string>();

  public inputValue: string = '';

  public constructor(private searchHandlerService: SearchHandlerService) {}

  public ngOnInit(): void {
    this.inputValue = this.searchHandlerService.filterString;
  }

  public changeChoice(): void {
    this.choiceChanged.emit('by word or sentance');
  }

  public changeFilteringString(e: Event): void {
    const str: string = (<HTMLInputElement>e.target).value;
    this.searchHandlerService.changeFilterString(str);
  }
}
