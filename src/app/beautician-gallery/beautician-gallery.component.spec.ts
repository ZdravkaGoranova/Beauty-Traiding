import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauticianGalleryComponent } from './beautician-gallery.component';

describe('BeauticianGalleryComponent', () => {
  let component: BeauticianGalleryComponent;
  let fixture: ComponentFixture<BeauticianGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeauticianGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeauticianGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
