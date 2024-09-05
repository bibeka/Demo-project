import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-ind-basic-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ind-basic-details.component.html',
  styleUrl: './ind-basic-details.component.scss'
})
export class IndBasicDetailsComponent {
  basicDetailsForm:any;
  constructor(private _fb:FormBuilder, private sharedData : SharedDataService){
  
  }
  
  ngOnInit() {
    this.basicDetailsForm= this._fb.group({
      Name: ['', [Validators.required]],
      MobNum: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Dob: ['', [Validators.required]]
  });
  
  }
  
  basicDetails(){
  
  }
}
