import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isFilterBlockHidden: boolean = true;

  public changeFilterBlockhidden(e: boolean): void {
    this.isFilterBlockHidden = e;
  }
}
