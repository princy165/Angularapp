import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor/visitor.component';
 import {HttpModule} from '@angular/http';
import { CommonService } from './shared/common.service';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { EditDetailComponent } from './visitorlist/editdetail/editdetail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorComponent,
    VisitorlistComponent,
    EditDetailComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    // RouterModule.forRoot([
     
    //   {path:'signup',component:SignupComponent},
    //   {path: 'login',component:LoginComponent},
    //   {path:'visitor',component:VisitorComponent},
    //   {path: '',redirectTo: 'login',pathMatch:'full'},
    //   {path: '**',redirectTo:'login',pathMatch:'full'}
     

    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
