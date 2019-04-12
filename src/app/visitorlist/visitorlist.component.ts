import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent implements OnInit {
  
  visitorList : Array<any> = [];

  constructor(private commonservice:CommonService,private router: Router) { 
  }

  ngOnInit() {
     this.commonservice. getUser().subscribe(data=>{
       
       this.visitorList = data;
       console.log(this.visitorList);
     })
}

deleteVisitor(visitor):void{
      this.commonservice.deleteUser(visitor).subscribe(data => {
          //this.visitorList=data;
          console.log(data)
          alert("Item deleted Successfully");
          this.router.navigate(['/visitorlist']);
  
      })
}
// @Input('ssoId') ssoId: any;
updateVisitor(visitor):void{
  this.router.navigate(['/editdetail', visitor.ssoid]);
  // this.ssoId = visitor.ssoid;
  // this.commonservice.editUser(visitor).subscribe(data=>{
  //   console.log(data)
  // })
}
Outtime(visitor):void{
  console.log('<<<<<<<<<<')
  console.log(visitor)
  this.commonservice.outTime(visitor).subscribe(data=>{
    console.log(data);
  })
}

// Outtime(visitor):void{
//   this.commonservice.outTime(visitor).subscribe();
// }
      
}
