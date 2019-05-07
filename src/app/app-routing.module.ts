import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { VisitorComponent } from './visitor/visitor.component';
import { EditDetailComponent } from './visitorlist/editdetail/editdetail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'visitor',component:VisitorComponent},
  {path: '',component:LoginComponent},
  // {path: '**',redirectTo:'visitor',pathMatch:'full'},
   {path:'visitorlist',component:VisitorlistComponent},
   {path:'editdetail/:ssoid',component:EditDetailComponent,data:{name1:'ABCD'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
