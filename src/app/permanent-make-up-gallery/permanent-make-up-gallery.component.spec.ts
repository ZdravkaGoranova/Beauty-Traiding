import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentMakeUpGalleryComponent } from './permanent-make-up-gallery.component';

describe('PermanentMakeUpGalleryComponent', () => {
  let component: PermanentMakeUpGalleryComponent;
  let fixture: ComponentFixture<PermanentMakeUpGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentMakeUpGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentMakeUpGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
