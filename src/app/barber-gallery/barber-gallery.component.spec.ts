import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberGalleryComponent } from './barber-gallery.component';

describe('BarberGalleryComponent', () => {
  let component: BarberGalleryComponent;
  let fixture: ComponentFixture<BarberGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarberGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
