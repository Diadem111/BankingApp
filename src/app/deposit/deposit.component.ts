import { Component, OnInit } from '@angular/core';
import { faExpeditedssl } from '@fortawesome/free-brands-svg-icons';
import { UserseriveService } from '../userserive.service';



@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  // public amount : any;
  public allUsers: any = [];
  public bankUsers: any = "";
  public local : any;
  public localRem : any;
  public numb :any;
  public editedIndex : number = 0;
  public currentUser :any ="";
  public currentCustomerIndexOf: any ="";
  public found : any ="";
  // public appUsers : any = "";
  // public currentUsers  : any = "";
  // public customerIndexOf : any = "";
  // public seenIndex : any = "";


  constructor(private _fullDetails :UserseriveService) { }

  ngOnInit(): void {
    this.allUsers= this._fullDetails.getAllUsers(); 
      var local :any =  (localStorage.getItem('localStore'));
      this.localRem = JSON.parse(local);
      // Editing
      this.bankUsers = JSON.parse(localStorage['localStore']);
      console.log(this.bankUsers);
      this.currentUser = JSON.parse(localStorage['currentBankUser']);
      
      
  }
  deposit(){
    this.found = this.bankUsers.find((val:any)=>val.firstName == this.currentUser.firstName);
    console.log(this.found);
    this.currentCustomerIndexOf =this.bankUsers.indexOf(this.found);
    console.log(this.currentCustomerIndexOf);
       if(!isNaN(Number(this.numb))){
        var numberValue = Number(this.numb);
        this.found.balance +=Number(this.numb); 
        this.currentUser['balance'] = this.found.balance;
        console.log(this.currentUser);
        this.bankUsers[this.currentCustomerIndexOf] = this.found;
        console.log(this.bankUsers);
        localStorage['localStore'] = JSON.stringify(this.bankUsers);
        localStorage['currentBankUser'] = JSON.stringify(this.currentUser);
       }else{
         alert('Not a number');
       }
   }
}
