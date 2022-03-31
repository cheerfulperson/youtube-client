import { Component, Input } from '@angular/core';
import { SearchHandlerService } from 'src/app/shared/search-handler.service';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss'],
})
export class WordInputComponent {
  @Input() public choice: string = '';

  public constructor(private searchHandlerService: SearchHandlerService) {}

  changeFilteringString(e: Event): void {
    const str: string = (<HTMLInputElement>e.target).value;
    this.searchHandlerService.changeFilterString(str);
  }
}
