import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
import { FetchDataService } from './services/fetch-data.service';
import { SearchHandlerService } from './services/search-handler.service';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginInformationComponent } from './components/header/login-information/login-information.component';
import { SearchComponent } from './components/header/search/search.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { WordInputComponent } from './components/filtering-block/word-input/word-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FilteringBlockComponent,
    LogoComponent,
    LoginInformationComponent,
    SearchComponent,
    SettingsButtonComponent,
    WordInputComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, LogoComponent],
  providers: [SearchHandlerService, FetchDataService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
