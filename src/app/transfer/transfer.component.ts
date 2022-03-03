import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public transferAmount : any;
  public transferAccount : any;
  public password : any;
  public currentUser : any = '';
  public beneficiaryAccount : any = '';
  public users : any = '';
  public currentUserIndex : any = '';


  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage['currentBankUser']);
    console.log(this.currentUser);
    this.users = JSON.parse(localStorage['localStore']);
    console.log(this.users);
    
    
  }
 transferDetail(){
   this.beneficiaryAccount = this.users.find((val:any,i:any)=>val.acctNum == this.transferAccount);
   console.log(typeof(this.transferAccount));
   console.log(this.beneficiaryAccount);
   this.currentUserIndex = this.users.indexOf(this.beneficiaryAccount);
   console.log(this.currentUserIndex);
   if(this.transferAmount < this.currentUser['balance'] && this.transferAccount!=this.currentUser['acctNum'] && this.password == this.currentUser['password']){
     this.beneficiaryAccount['balance'] += Number(this.transferAmount);
     this.currentUser['balance'] -= Number(this.transferAmount); 
     console.log(this.currentUser);
     this.users[this.currentUserIndex] = this.beneficiaryAccount;
     localStorage['localStore'] = JSON.stringify(this.users);
     localStorage['currentBankUser'] = JSON.stringify(this.currentUser);
   }else{
     alert(`Dear ${this.currentUser['firstName']},you do not have sufficient fund`);
   }
 }
}
