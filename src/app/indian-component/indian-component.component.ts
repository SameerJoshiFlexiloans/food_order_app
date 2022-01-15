import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { foodCard } from '../food.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-indian-component',
  templateUrl: './indian-component.component.html',
  styleUrls: ['./indian-component.component.scss']
})
export class IndianComponentComponent implements OnInit {

  constructor(private menuService:MenuService,private http:HttpClient) { }

  httpValue!:any;
  foods!:Array<foodCard>;
  ngOnInit(): void {
      this.menuService.getDataValues('indian').subscribe(value=>{
        this.httpValue = value;
        this.foods = this.httpValue.data;
      });
  }
}
