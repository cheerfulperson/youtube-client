import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnStyleDirective } from './btn-style.directive';
import { CommonBtnComponent } from './common-btn/common-btn.component';

@NgModule({
  declarations: [AppComponent, BtnStyleDirective, CommonBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
