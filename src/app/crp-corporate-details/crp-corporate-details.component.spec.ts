import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpCorporateDetailsComponent } from './crp-corporate-details.component';

describe('CrpCorporateDetailsComponent', () => {
  let component: CrpCorporateDetailsComponent;
  let fixture: ComponentFixture<CrpCorporateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrpCorporateDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrpCorporateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
