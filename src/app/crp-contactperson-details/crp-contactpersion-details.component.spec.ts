import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpContactpersionDetailsComponent } from './crp-contactpersion-details.component';

describe('CrpContactpersionDetailsComponent', () => {
  let component: CrpContactpersionDetailsComponent;
  let fixture: ComponentFixture<CrpContactpersionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrpContactpersionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrpContactpersionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
