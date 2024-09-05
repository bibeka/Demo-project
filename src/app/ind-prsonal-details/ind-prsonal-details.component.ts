import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-ind-prsonal-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ind-prsonal-details.component.html',
  styleUrl: './ind-prsonal-details.component.scss'
})
export class IndPrsonalDetailsComponent {
  personalDetailsForm:any;
  constructor(private _fb:FormBuilder, private sharedData : SharedDataService){
  
  }
  
  ngOnInit() {
    this.personalDetailsForm= this._fb.group({
      Pan: ['', Validators.required],
      VNo: ['', Validators.required]
  });
  
  }
  
  personalDetails(){
    this.sharedData.saveData('personal details', this.personalDetailsForm.value);
  }
}
