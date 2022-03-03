import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserseriveService } from '../userserive.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email : string = '';
  public password : string = ""; 
  // public forUsers : any = [];
  public storage : any = {};
  public allUsers : any;
  public saveError : boolean = false;
  public saveSuccess : boolean = false;
  
  constructor(private _userDetail :UserseriveService, private router : Router) { }

  ngOnInit(): void {
    // localStorage.getItem(JSON.parse('local'));
    this.allUsers = this._userDetail.getAllUsers();
  }
  loginDetail(){
    this.storage = this.allUsers.find((val:any,i:any)=>val.email == this.email && val.password == this.password);
      if(this.storage){
        this.saveSuccess = true;
        this.router.navigate(["/dashboard"]);
        localStorage['currentBankUser'] = JSON.stringify(this.storage);
      
      }else{
        this.saveError = true;
      }
    }
  }

