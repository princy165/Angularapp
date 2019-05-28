import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/common.service';
@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    styles: [
        ' input.ng-invalid.ng-dirty{border-color:red}'
    ]
})
export class LoginComponent {
    username:any;
    pwd:any;
    loginForm: FormGroup
    constructor(@Inject(FormBuilder) private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private service:CommonService){
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
          
          let reqBody = {
              userName:this.username,
              password:this.pwd
          }
          this.service.loginUser(reqBody).subscribe(
            (data)=>{
            console.log(data);
            this.router.navigate(['/visitor'])
          },
          (err)=>{
            console.log(err.message)
          })

    }
    resetform():void{
        console.log(this.loginForm.reset());
    }
}