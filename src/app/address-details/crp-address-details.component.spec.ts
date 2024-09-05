import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpAddressDetailsComponent } from './crp-address-details.component';

describe('CrpAddressDetailsComponent', () => {
  let component: CrpAddressDetailsComponent;
  let fixture: ComponentFixture<CrpAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrpAddressDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrpAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
