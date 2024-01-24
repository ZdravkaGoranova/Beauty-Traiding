import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupGalleryComponent } from './makeup-gallery.component';

describe('MakeupGalleryComponent', () => {
  let component: MakeupGalleryComponent;
  let fixture: ComponentFixture<MakeupGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeupGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeupGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
