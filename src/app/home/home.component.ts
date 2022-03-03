import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public url: any = "/./images/atm.jfif";
 public bank :string = 'bonuses';
  constructor() { }

  ngOnInit(): void {
  }

}
