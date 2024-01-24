import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicureGalleryComponent } from './manicure-gallery.component';

describe('ManicureGalleryComponent', () => {
  let component: ManicureGalleryComponent;
  let fixture: ComponentFixture<ManicureGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManicureGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManicureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
