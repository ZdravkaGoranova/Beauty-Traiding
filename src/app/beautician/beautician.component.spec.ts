import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauticianComponent } from './beautician.component';

describe('BeauticianComponent', () => {
  let component: BeauticianComponent;
  let fixture: ComponentFixture<BeauticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeauticianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeauticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
