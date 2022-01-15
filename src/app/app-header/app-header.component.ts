import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private router:Router) { }

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
    this.router.navigate(['/']);
  }
}
