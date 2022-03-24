import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnStyleDirective } from './common-btn/shared/btn-style.directive';
import { CommonBtnComponent } from './common-btn/common-btn.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { UserIconComponent } from './header/user-icon/user-icon.component';
import { PreHeaderComponent } from './header/pre-header/pre-header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardComponent } from './main-page/card/card.component';
import { PodcastInfoComponent } from './main-page/podcast-info/podcast-info.component';
import { VideoCardComponent } from './main-page/video-card/video-card.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
import { SearchItemsService } from './shared/search-items.service';

@NgModule({
  declarations: [
    AppComponent,
    BtnStyleDirective,
    CommonBtnComponent,
    HeaderComponent,
    SearchComponent,
    UserIconComponent,
    PreHeaderComponent,
    MainPageComponent,
    CardComponent,
    PodcastInfoComponent,
    VideoCardComponent,
    TextFieldComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegistrationComponent,
    CreateCardFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SearchItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
