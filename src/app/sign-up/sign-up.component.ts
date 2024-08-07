import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  passwordType:string='password';
  eyeIcon:string='fa-eye-slash';
  hideShowPass(){
  if(this.passwordType=='password')
    {
      this.passwordType='text';
      this.eyeIcon='fa-eye'}
  else{
    this.passwordType='password';
    this.eyeIcon='fa-eye-slash';
  }
  }
}
