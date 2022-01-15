import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  logged!:boolean;
  ngOnInit(): void {
    if(sessionStorage.getItem('logged') == 'in'){
      this.logged = true;
    }
    else{
      this.logged = false;
    }
  }

  signout(){
    sessionStorage.removeItem('logged');
    this.logged = false;
  }
}
