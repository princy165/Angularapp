import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { map, filter} from 'rxjs/operators';



@Injectable({
  providedIn:'root',
})
export class CommonService
{
     constructor(private http: Http){}

      saveUser(user)
      {
          return this.http.post('http://localhost:3000/api/SaveUser/',user)
          // .pipe(map((response:Response)=>response.json()));
      }
      getUser()
      {
        return this.http.get('http://localhost:3000/api/GetUser/')
        .pipe(map((response:Response)=>response.json()))
      }
      editUser(user){
        return this.http.post('http://localhost:3000/api/EditUser',user)
      }

      deleteUser(user){
        return this.http.post('http://localhost:3000/api/DeleteUser',user)
      }
      outTime(user){
        //console.log('>>>>>>>>>>>')
        console.log(JSON.stringify(user))
       // console.log('>>>>>>>>>>>')
        return this.http.post('http://localhost:3000/api/Gettime', user)
        // return this.http.get('http://localhost:3000/api/Gettime')
        // .pipe(map((response:Response)=>response.json()))
      }
}