import {Inject,Component} from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import {} from 'rxjs'
@Component({
    selector:'signup-root',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css'],
     styles:['input.ng-invalid.ng-dirty{border-color:red}']
})
export class SignupComponent
{
    signupForm:FormGroup;
    constructor(@Inject(FormBuilder)private fb:FormBuilder)
    {
       this.buildForm();
       console.log(this.signupForm.value)

    }
    get name(): FormControl {
        return this.signupForm.get('name') as FormControl
      }
      get userid(): FormControl {
        return this.signupForm.get('userid') as FormControl
      }
      get createpasswd(): FormControl {
        return this.signupForm.get('createpasswd') as FormControl
      }
      get confirmpasswd(): FormControl {
        return this.signupForm.get('confirmpasswd') as FormControl
      }
    buildForm()
    {
        this.signupForm=this.fb.group({
            name:[null,[
                Validators.required,
                Validators.pattern('[A-Z][a-z]+')
            ]],
            userid:[null,[
                Validators.required
            ]],
            createpasswd:[null,[
                Validators.required
            ]],
            confirmpasswd:[null,[
                Validators.required
            ]],
            contactno:[null,[
                Validators.required,
                Validators.pattern('[^[0][1-9]\d{9}$|^[1-9]\d{9}$]')
            ]],
        })
    }
    submitForm():void{
        console.log(this.signupForm.value);
    }
    resetForm():void{
        console.log(this.signupForm.reset());
    }
}


