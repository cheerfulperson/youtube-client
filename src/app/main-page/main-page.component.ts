import { Component } from '@angular/core';
import response from '../../assets/response.json';
import { Response } from '../shared/response.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public response: Response = response;
  // constructor() {}
}
