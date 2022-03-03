import { Component, OnInit } from '@angular/core';
import {faEnvelopesBulk} from  '@fortawesome/free-solid-svg-icons';
import {faMoneyBill} from  '@fortawesome/free-solid-svg-icons';
import {faUser} from  '@fortawesome/free-solid-svg-icons';
import {faEllipsisVertical} from  '@fortawesome/free-solid-svg-icons';
import { UserseriveService } from '../userserive.service';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {
 public envelope : any = faEnvelopesBulk;
 public atm : any = faMoneyBill;
 public user : any = faUser;
 public vertical : any = faEllipsisVertical;
 public balance :any;
 public allUsers : any = [];
 public b : any;
 public fromStore : any;
  constructor(private _fullDetails :UserseriveService) {  }

  ngOnInit(): void {
    this.allUsers = this._fullDetails.getAllUsers();
    var store : any = localStorage.getItem('localStore');
    this.fromStore = JSON.parse(store);
    console.log(this.fromStore);
    // var store:any = JSON.parse(fromStore);
   for (let y = 0; y < this.fromStore.length; y++) {
      this.b = this.fromStore[y].balance;
     
   }
  }


}
