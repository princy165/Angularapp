import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    styles: [
        ' input.ng-invalid.ng-dirty{border-color:red}'
    ]
})
export class LoginComponent {
    loginForm: FormGroup
    constructor(@Inject(FormBuilder) private fb:FormBuilder,private router:Router){
        this.buildForm();
        console.log(this.loginForm.value)

    }
    get userid(): FormControl {
        return this.loginForm.get('userid') as FormControl
    }
    get password(): FormControl {
        return this.loginForm.get('password') as FormControl
    }
    buildForm() {
        this.loginForm=this.fb.group({
            userid:[null,[
                Validators.required,
                Validators.pattern('[a-z]+')
            ]],
            password:[null,[
                Validators.required,
                Validators.pattern('[0-9]+')
            ]]
        })
    }
    login():void{
          //this.router.navigate(['/visitor'])
          console.log("*************");
    }
    resetform():void{
        console.log(this.loginForm.reset());
    }
}