import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { BtnStyleDirective } from './shared/btn-style.directive';
// import { HeaderComponent } from './core/components/header/header.component';
// import { SearchComponent } from './core/components/header/search/search.component';
// import { MainPageComponent } from './main-page/main-page.component';
// import { CardComponent } from './main-page/card/card.component';
// import { PodcastInfoComponent } from './main-page/podcast-info/podcast-info.component';
// import { VideoCardComponent } from './main-page/video-card/video-card.component';
// import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
// import { TimeBorderDirective } from './main-page/card/shared/time-border.directive';
// import { LogoComponent } from './core/components/header/logo/logo.component';
// import { LoginInformationComponent } from './core/components/header/login-information/login-information.component';
// import { WordInputComponent } from './core/components/filtering-block/word-input/word-input.component';
// import { FilteringBlockComponent } from './core/components/filtering-block/filtering-block.component';
// import { SettingsButtonComponent } from './core/components/header/settings-button/settings-button.component';

@NgModule({
  declarations: [
    AppComponent,
    // BtnStyleDirective,
    // HeaderComponent,
    // SearchComponent,
    // CardComponent,
    // PodcastInfoComponent,
    // VideoCardComponent,
    // NotFoundPageComponent,
    // LoginComponent,
    // RegistrationComponent,
    // CreateCardFormComponent,
    // TimeBorderDirective,
    // LogoComponent,
    // LoginInformationComponent,
    // WordInputComponent,
    // FilteringBlockComponent,
    // SettingsButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
