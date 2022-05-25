import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';
import { Item } from 'src/app/shared/response.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input() public itemData: Item | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fetchDataService: FetchDataService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((id: string) => {
        this.fetchDataService
          .getVideoById(id)
          .pipe(
            catchError(() => {
              this.router.navigate(['404']);
              return [];
            })
          )
          .subscribe((data: Item | null) => {
            if (!data) {
              this.router.navigate(['404']);
            }
            this.itemData = data;
          });
      });
  }

  public closeWindow(): void {
    this.router.navigateByUrl('');
  }
}
