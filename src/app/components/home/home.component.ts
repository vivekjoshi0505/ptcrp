import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMenuVisible: boolean = false;
  isBtnVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.isMenuVisible = true;
    this.isBtnVisible = true
  }

}
