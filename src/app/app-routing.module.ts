import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { VisitorComponent } from './visitor/visitor.component';
import { EditDetailComponent } from './visitorlist/editdetail/editdetail.component';

const routes: Routes = [
  {path:'',component:VisitorComponent},
  // // {path: '',redirectTo: 'login',pathMatch:'full'},
  // {path: '**',redirectTo:'visitor',pathMatch:'full'},
   {path:'visitorlist',component:VisitorlistComponent},
   {path:'editdetail/:ssoid',component:EditDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
