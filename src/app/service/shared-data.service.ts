import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
private formData:any = {};

//Save data from a specific component

saveData(page:string, data:any):void {
  this.formData[page] = data;
}

//Retrive data 
getFormData(){
  return this.formData;
}

//clear form Data
clearData(){
  this.formData = {};
}

}
