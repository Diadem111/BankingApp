import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { detailsInterface } from '../type/details.interface';
import { UserseriveService } from '../userserive.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName : string = '';
  public lastName : string = '';
  public email : string = '';
  public bvn : string = '';
  public password : any;
  public allUsers: any = [];
  public acctNum : any = '';
  public balance : number = 5000;
  public confirmPassword : any;
// public  fullDetails : detailsInterface[] = []
  constructor(private _fullDetails :UserseriveService,private router : Router) { }

  ngOnInit(): void {
    this.allUsers= this._fullDetails.getAllUsers(); 
    console.log(this.allUsers);
    
    // console.log(this._fullDetails.getAllUsers());
  }
  signIn(){
    let {firstName,lastName,email,bvn,password,confirmPassword,acctNum,balance} = this;
    if(firstName && lastName && email && bvn && (password == confirmPassword)){
      acctNum = `004${(Math.floor(Math.random()*100000001))}`;
      // this.allUsers.push(this.acctNum, this.balance);
      this._fullDetails.receiveUser({firstName,lastName,email,bvn,password,confirmPassword,acctNum,balance});
      localStorage['localStore'] = JSON.stringify(this.allUsers);
      alert(`${this.firstName} you have successfully open an account `);
           localStorage['localStore'] = JSON.stringify(this.allUsers);
    
      // modalPoint();
      this.router.navigate(["/login"]) ;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.bvn = '';
      this.password = '';
      this.confirmPassword = ''
    }else if(this.password != this.confirmPassword){
      alert(`check your password`)
    }else{
      alert(`please complete the form`)
    }
   
  }
}
