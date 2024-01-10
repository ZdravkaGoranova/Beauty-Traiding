import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeratinousComponent } from './keratinous.component';

describe('KeratinousComponent', () => {
  let component: KeratinousComponent;
  let fixture: ComponentFixture<KeratinousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeratinousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeratinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
