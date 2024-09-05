import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpCompanyDetailsComponent } from './crp-company-details.component';

describe('CrpCompanyDetailsComponent', () => {
  let component: CrpCompanyDetailsComponent;
  let fixture: ComponentFixture<CrpCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrpCompanyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrpCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
