import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndBasicDetailsComponent } from './ind-basic-details.component';

describe('IndBasicDetailsComponent', () => {
  let component: IndBasicDetailsComponent;
  let fixture: ComponentFixture<IndBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndBasicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
