import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authGuard:AuthGuard,private menuService:MenuService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  email:string="";
  pass:string = "";
  temp:any;
  message!:string;
  logged:boolean = false;

  login(){
    this.menuService.login(this.email,this.pass).subscribe(value=>{
      this.temp = value;
      if(this.temp.success){
        this.logged = true;
        this.message = this.temp.message;
        setTimeout(()=>{
          this.logged = false;
          sessionStorage.setItem("logged","in");
          this.router.navigate(['/']);
        },2000);
      }
      else{
        this.logged = true;
        this.message = this.temp.message;
      }
    });
  }
  
}
