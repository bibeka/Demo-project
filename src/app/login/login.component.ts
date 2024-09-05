import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // userObj = { 
  //   username: '',
  //   password: ''
  // }
  user_role: any;
  loginform:any;

  constructor (private router: Router, private _fb: FormBuilder){
  
  }
  
  ngOnInit() {
     this.loginform= this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  
  }
 

  onLogin() {
    //here we can call the actual API to validate the user and based on the response we can identify the role
    //currently it's hardcoded in UI to navigate to the respective dashboard based on the user role.
    /*validateUser(){
        this.loginService.userRoleDetails(this.loginForm.value).subscribe({
          next:(res:any)=>{
           this.user_role = res.role
           this.userDetailsSubject.next(res);
          }
        })
      }
    */
   console.log(this.loginform.value);
    this.user_role = "Corporate " //which will be coming from API response
    if(this.loginform.value.username == "admin" && this.loginform.value.password == "123") {
      if(this.user_role= "Corporate"){
        this.router.navigateByUrl("crpdashboard")
      }
      else{
        this.router.navigateByUrl("inddashboard")
      }
  }
    else {
      alert("Username and Password is not correct");
    }
    
  }
}
