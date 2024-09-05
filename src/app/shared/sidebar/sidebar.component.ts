import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  user:any;
  menuItems:any;
  
  constructor(private router:Router){}
  //Individual
// userRoleDetails:any = {
//   "role": "Individual",
//   "modules": [
//       {
//           "module_name": "Basic Details"
//       },
//       {
//           "module_name": "Address Details"
//       },
//       {
//           "module_name": "Personal Details"
//       }
//    ]	
// } 

//Corporate
userRoleDetails:any = {
  "role": "Corporate",
  "modules": [
      {
          "module_name": "Company Details"
      },
      {
          "module_name": "Address Details"
       },
      {
          "module_name": "Contact Person Details"
      },
      {
          "module_name": "Corporate Details"
     },
     ]	
}

ngOnInit() {
  //subscribe the subject from service file where we have the respose while we called on click of login button
  this.user = this.userRoleDetails.role;
  this.menuItems = this.userRoleDetails.modules;
  console.log("from sidebar");
  console.log(this.user);
  console.log(this.menuItems);
}
sidebarLinks(pageName:string){
let newPageName = pageName.split(" ").join("");
let first = newPageName.substring(0,1).toLowerCase();
let str = newPageName.substring(1);
let finalStr = "/"+first + str;
console.log (finalStr);
this.router.navigateByUrl(finalStr);
}
}
