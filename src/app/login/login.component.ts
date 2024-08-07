import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  passwordType:string='password';
  eyeIcon:string='fa-eye-slash';

  constructor(private fb:FormBuilder, private auth:AuthService){
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  }
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
  login(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe(
        {
          next:(res:any)=>{alert(res)
      },
      error:(err?:any)=>{alert(err.error.message)}
    });
    }
    else
    {
      this.validateLoginFormFields(this.loginForm);
    }
  }
  validateLoginFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(feild=>{
      const control=formGroup.get(feild);
      if(control instanceof FormControl)
      {
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup)
      {
        this.validateLoginFormFields(control);
      }
    }

    )
  }
}
