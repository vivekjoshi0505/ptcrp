import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isMenuVisible: boolean = false;
  isBtnVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.isMenuVisible = false;
    this.isBtnVisible = false;

  }

}
