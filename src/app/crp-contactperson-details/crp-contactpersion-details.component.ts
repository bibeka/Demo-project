import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-crp-contactpersion-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crp-contactpersion-details.component.html',
  styleUrl: './crp-contactpersion-details.component.scss'
})
export class CrpContactpersionDetailsComponent {
  contactPersonDetailsForm:any;
  constructor(private _fb:FormBuilder, private sharedData : SharedDataService){
  
  }
  
  ngOnInit() {
    this.contactPersonDetailsForm= this._fb.group({
      CPName: ['', [Validators.required]],
      CPMob: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      CPEmail: ['', [Validators.required, Validators.email] ],
      CPDesignation: ['', [Validators.required]]
  });
  
  }
  get CPMob() {
    return this.contactPersonDetailsForm.get('CPMob');
  }
  get CPEmail() {
    return this.contactPersonDetailsForm.get('CPEmail');
  }



  cpDetails(){
    this.sharedData.saveData('contact details', this.contactPersonDetailsForm.value);
  }
}
