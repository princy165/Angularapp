import { Component,Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../shared/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitorlistComponent } from '../visitorlist.component';




@Component({
  selector: 'app-editdetail',
  templateUrl: './editdetail.component.html',
  styleUrls: ['./editdetail.component.css'],
  styles: [
    ' input.ng-invalid.ng-dirty{border-color:red}'
  ]
})
export class EditDetailComponent implements OnInit {
data:any
VisotorName:string;
VisitorId:string;
cF:string;
ssoId:any;
InTime:any;
AuthName:string;
AuthId:string;
originalData:any;
  editdetailForm: FormGroup;
  constructor(@Inject(FormBuilder) private fb: FormBuilder, private newService: CommonService, private router: Router, private route: ActivatedRoute) {
    this.buildForm();
    this.ssoId = this.route.snapshot.paramMap.get('ssoid');
    this.data=this.newService.getFilledData();
    if(this.data){
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].ssoid==this.ssoId){
          this.VisitorId=this.data[i].id
          this.VisotorName=this.data[i].name
          this.cF=this.data[i].cf
          this.InTime=this.data[i].time
          this.AuthName=this.data[i].authname
          this.AuthId=this.data[i].authid
          this.ssoId=this.data[i].ssoid
          break;
        }
      }
    }
    
    console.log('data =>.. ',this.ssoId)

 
    console.log(this.editdetailForm.value);
  }
  Repdata;
  valbutton = "Save";

  ngOnInit() {
   //this.editvisitorForm.patchValue({ssoid:visitor.ssoid})
  }
  get name(): FormControl {
    return this.editdetailForm.get('name') as FormControl
  }
  get id(): FormControl {
    return this.editdetailForm.get('id') as FormControl
  }
  get time(): FormControl {
    return this.editdetailForm.get('time') as FormControl
  }
  get cf(): FormControl {
    return this.editdetailForm.get('cf') as FormControl
  }
  get ssoid(): FormControl {
    return this.editdetailForm.get('ssoid') as FormControl
  }
  get authname(): FormControl {
    return this.editdetailForm.get('authname') as FormControl
  }
  get authid(): FormControl {
    return this.editdetailForm.get('authid') as FormControl
  }
  // get outtime(): FormControl {
  //   return this.editvisitorForm.get('outtime') as FormControl
  // }
  
  buildForm() {
    this.editdetailForm = this.fb.group({
      name: [null, [
        Validators.required,
        Validators.pattern('[A-Z][a-z]+')
      ]
      ],
      id: [null, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(3),
        Validators.maxLength(6)

      ]
      ],
      time: [null, [
        Validators.required
      ]
      ],
      cf: [null, [
        Validators.required
      ]
      ],
      ssoid: [null, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(9),
        Validators.maxLength(9)
      ]
      ],


      authname: [null, [
        Validators.required,
        Validators.pattern('[A-Z][a-z]+')
      ]
      ],
      authid: [null, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(3),
        Validators.maxLength(6)
      ]

      ],
      outtime: [null, [
        Validators.required
      ]
      ],
    });
  }
  
  saveForm(form): void {
    console.log(form.value);
   // this.form.patchValue({id:visitor.id})
    this.newService.editUser(form.value)
      .subscribe(data => {

        console.log('data => ',data)
        console.log(this.name1)
      })
      
    alert("updated Successfully");
    this.router.navigate(['/visitorlist'])
  }
  @Input()visitor:VisitorlistComponent;
  @Input('master') masterName: string;
  @Input('name') name1:String;
}