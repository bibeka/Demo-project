import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPrsonalDetailsComponent } from './ind-prsonal-details.component';

describe('IndPrsonalDetailsComponent', () => {
  let component: IndPrsonalDetailsComponent;
  let fixture: ComponentFixture<IndPrsonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndPrsonalDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndPrsonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
