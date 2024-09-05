import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-crp-address-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './crp-address-details.component.html',
  styleUrl: './crp-address-details.component.scss'
})
export class AddressDetailsComponent {
  // form!: FormGroup;

addressDetailsForm:any;
constructor(private _fb:FormBuilder, private sharedData : SharedDataService){

}

ngOnInit() {
  this.addressDetailsForm= this._fb.group({
    add1: ['', [Validators.required]],
    add2: ['', [Validators.required]],
    disctrict: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
});

}

get pincode() {
  return this.addressDetailsForm.get('pincode');
}

addressDetails(){
 console.log(this.addressDetailsForm.value);
 this.sharedData.saveData('address details', this.addressDetailsForm.value);
 
}
}
