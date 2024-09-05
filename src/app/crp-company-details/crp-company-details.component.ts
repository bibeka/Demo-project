import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../service/shared-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crp-company-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './crp-company-details.component.html',
  styleUrl: './crp-company-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CrpCompanyDetailsComponent {
  companyDetails:any;
  companyType:any = ['SME','MME','LLP','Startup','Private','Public']
  constructor(private _fb:FormBuilder, private sharedData : SharedDataService){
  
  }
  
  ngOnInit() {
    this.companyDetails= this._fb.group({
      CompName: ['', [Validators.required]],
      CompTin: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{14}$')]],
      CompType: ['', [Validators.required]]
  });
  
  }
  get CompTin() {
    return this.companyDetails.get('CompTin');
  }
  
  onSavecompanyDetails(){
    //this.sharedData.saveData('company details', this.companyDetails.value);
  this.sharedData.saveData('company details', this.companyDetails.value);
  console.log(this.companyDetails.value)
  }

  // changeCompanyType(e:any){
  //   console.log(e.target.value );

  // }
}
