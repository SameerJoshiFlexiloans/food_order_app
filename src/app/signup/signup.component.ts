import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private menuService:MenuService,private router:Router,private route:ActivatedRoute) { }
  
  email:string = '';
  pass:string = '';
  logged:boolean = false;
  message!:string;
  temp:any;
  ngOnInit(): void {
  }

  redir(){
    console.log("here",this.route);
    this.router.navigate(['/login']);
  }

  signup(){
    this.menuService.signup(this.email,this.pass).subscribe(value=>{
      this.temp = value;
      if(this.temp.success){
        this.logged = true;
        this.message = this.temp.message;
        setTimeout(()=>{
          this.logged = false;
          this.router.navigate(['/login']);
        },2000);
      }
      else{
        this.logged = true;
        this.message = this.temp.message;
      }
    });
  }
}
