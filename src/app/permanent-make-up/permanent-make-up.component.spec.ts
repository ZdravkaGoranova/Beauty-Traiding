import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentMakeUpComponent } from './permanent-make-up.component';

describe('PermanentMakeUpComponent', () => {
  let component: PermanentMakeUpComponent;
  let fixture: ComponentFixture<PermanentMakeUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentMakeUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentMakeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
