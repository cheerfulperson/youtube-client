import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastInfoComponent } from './podcast-info.component';

describe('PodcastInfoComponent', () => {
  let component: PodcastInfoComponent;
  let fixture: ComponentFixture<PodcastInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
