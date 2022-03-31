import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss'],
})
export class WordInputComponent {
  @Input() public choice: string = '';
}
