import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentKeratinouspGalleryComponent } from './permanent-keratinousp-gallery.component';

describe('PermanentKeratinouspGalleryComponent', () => {
  let component: PermanentKeratinouspGalleryComponent;
  let fixture: ComponentFixture<PermanentKeratinouspGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentKeratinouspGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentKeratinouspGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
