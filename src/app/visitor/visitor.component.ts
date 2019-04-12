import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css'],
  styles: [
    ' input.ng-invalid.ng-dirty{border-color:red}'
  ]
})
export class VisitorComponent implements OnInit {

  pageTitle: string = 'Visitor Portal';
  visitorForm: FormGroup;
  constructor(@Inject(FormBuilder) private fb: FormBuilder, private newService: CommonService, private router: Router, private route: ActivatedRoute) {
    this.buildForm();
    console.log(this.visitorForm.value);
  }
  Repdata;
  valbutton = "Submit";

  ngOnInit() {
    this.newService.getUser().subscribe(data => this.Repdata = data)
  }
  get name(): FormControl {
    return this.visitorForm.get('name') as FormControl
  }
  get id(): FormControl {
    return this.visitorForm.get('id') as FormControl
  }
  get time(): FormControl {
    return this.visitorForm.get('time') as FormControl
  }
  get cf(): FormControl {
    return this.visitorForm.get('cf') as FormControl
  }
  get ssoid(): FormControl {
    return this.visitorForm.get('ssoid') as FormControl
  }
  get authname(): FormControl {
    return this.visitorForm.get('authname') as FormControl
  }
  get authid(): FormControl {
    return this.visitorForm.get('authid') as FormControl
  }
  
  buildForm() {
    this.visitorForm = this.fb.group({
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
     
    });
  }

  submitForm(form): void {
    console.log(form.value);
    this.newService.saveUser(form.value)
      .subscribe(data => {

        console.log(data)

      })
      // var retVal = confirm("Do you want to continue ?");
      // if( retVal == true ) {
      //    document.write ("User wants to continue!");
      //    return true;
      // } else {
      //    document.write ("User does not want to continue!");
      //    return false;
      // }
    alert("Submitted Successfully");
    this.router.navigate(['/visitorlist']);

  }

  resetForm(): void {
    console.log(this.visitorForm.reset());
  }


}


