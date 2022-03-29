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
import { TimeBorderDirective } from './main-page/card/shared/time-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    BtnStyleDirective,
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
    TimeBorderDirective,
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
  providers: [SearchItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
