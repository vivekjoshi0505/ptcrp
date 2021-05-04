import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isMenuVisible: boolean = true;
  isBtnVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.isMenuVisible = false;
    this.isBtnVisible = true;
  }

}
