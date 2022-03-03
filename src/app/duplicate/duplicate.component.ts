import { Component, OnInit } from '@angular/core';
import { faHome, faHouse} from '@fortawesome/free-solid-svg-icons';
import {faDashboard} from  '@fortawesome/free-solid-svg-icons';
import {faChartLine} from  '@fortawesome/free-solid-svg-icons';
import {faWallet} from  '@fortawesome/free-solid-svg-icons';
import {faBell} from  '@fortawesome/free-solid-svg-icons';
import {faBars} from  '@fortawesome/free-solid-svg-icons';
import {faEnvelopesBulk} from  '@fortawesome/free-solid-svg-icons';
import {faMoneyBill} from  '@fortawesome/free-solid-svg-icons';
import {faUser} from  '@fortawesome/free-solid-svg-icons';
import {faEllipsisVertical} from  '@fortawesome/free-solid-svg-icons';
import { UserseriveService } from '../userserive.service';
import {faEllipsisH} from  '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {
  public home : any = faHome;
  public dashBoard : any = faDashboard;
  public chartOf : any = faChartLine;
  public wallet : any = faWallet;
  public bell : any = faBell;
  public bar : any = faBars;
  public envelope : any = faEnvelopesBulk;
 public atm : any = faMoneyBill;
 public user : any = faUser;
 public vertical : any = faEllipsisVertical;
 public balance :any;
 public allUsers : any = [];
 public fromStore : any;
 public date : any = new Date;
 public horizontal : any = faEllipsisH;
 public currentBalance : any = '';
 public userBalance : any = '';
 public totalBalance : any = '';
 public b : any;
 public ctx :any;
 public chart : any;
 




  constructor(private _fullDetails :UserseriveService) {  }

  ngOnInit(): void {
    this.allUsers = this._fullDetails.getAllUsers();
    var store : any = localStorage.getItem('localStore');
    this.fromStore = JSON.parse(store);
    console.log(this.fromStore);
    this.currentBalance = JSON.parse(localStorage['currentBankUser']);
    console.log(this.currentBalance);
   this.totalBalance =  this.currentBalance['balance'];
   console.log(this.totalBalance);
   this.b = this.totalBalance;
   
  }


}
