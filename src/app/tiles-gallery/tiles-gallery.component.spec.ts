import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesGalleryComponent } from './tiles-gallery.component';

describe('TilesGalleryComponent', () => {
  let component: TilesGalleryComponent;
  let fixture: ComponentFixture<TilesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilesGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TilesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
