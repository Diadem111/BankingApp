import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserseriveService {
public allUsers : any = [];

  constructor() { }
 
  getAllUsers(){
    this.allUsers = localStorage['localStore']?JSON.parse(localStorage['localStore']) : []
       return this.allUsers;
      //  console.log('i got here');
       
  }
  receiveUser(user:any){
    this.allUsers.push(user);
    // console.log(user);
    console.log(this.allUsers);
    
    
  }
}
