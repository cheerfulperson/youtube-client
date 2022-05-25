import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnStyleDirective } from './shared/btn-style.directive';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardComponent } from './main-page/card/card.component';
import { PodcastInfoComponent } from './main-page/podcast-info/podcast-info.component';
import { VideoCardComponent } from './main-page/video-card/video-card.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
import { TimeBorderDirective } from './main-page/card/shared/time-border.directive';
import { SearchHandlerService } from './shared/search-handler.service';
import { LogoComponent } from './header/logo/logo.component';
import { LoginInformationComponent } from './header/login-information/login-information.component';
import { WordInputComponent } from './filtering-block/word-input/word-input.component';
import { FilteringBlockComponent } from './filtering-block/filtering-block.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { FetchDataService } from './shared/fetch-data.service';
import { ResultFilterPipe } from './main-page/shared/result-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BtnStyleDirective,
    HeaderComponent,
    SearchComponent,
    MainPageComponent,
    CardComponent,
    PodcastInfoComponent,
    VideoCardComponent,
    TextFieldComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegistrationComponent,
    CreateCardFormComponent,
    TimeBorderDirective,
    LogoComponent,
    LoginInformationComponent,
    WordInputComponent,
    FilteringBlockComponent,
    SettingsButtonComponent,
    ResultFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [SearchHandlerService, FetchDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
