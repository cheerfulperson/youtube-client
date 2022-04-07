import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { ResultFilterPipe } from './components/main-page/shared/result-filter.pipe';
import { CardComponent } from './components/main-page/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { TimeBorderDirective } from './directives/time-border.directive';
import { PodcastInfoComponent } from './components/main-page/podcast-info/podcast-info.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { VideoCardComponent } from './components/detailed-info-page/video-card.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { YoutubeService } from './services/youtube.service';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'result',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'video/:id',
    component: VideoCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    component: NotFoundPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  declarations: [
    ResultFilterPipe,
    MainPageComponent,
    CardComponent,
    TimeBorderDirective,
    PodcastInfoComponent,
    NotFoundPageComponent,
    VideoCardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [YoutubeService],
  exports: [RouterModule],
})
export class YoutubeModule {}
