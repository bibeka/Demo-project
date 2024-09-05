import { Component } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crp-corporate-details',
  standalone: true,
  imports: [],
  templateUrl: './crp-corporate-details.component.html',
  styleUrl: './crp-corporate-details.component.scss'
})
export class CrpCorporateDetailsComponent {
  constructor(private http:HttpClient, private sharedData : SharedDataService){
  
  }
  submit(){
    const finalData =  this.sharedData.getFormData();
    console.log(finalData); //this is to show the final data, actual data can be send as request payload in post call
    // this.http.post('posturl', finalData).subscribe(response => {
    // console.log(response);
    //   this.sharedData.clearData();
    // })
  }
}
