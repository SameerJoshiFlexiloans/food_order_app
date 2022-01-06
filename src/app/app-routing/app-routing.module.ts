import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { IndianComponentComponent } from '../indian-component/indian-component.component';


const routes:Routes = [
  {path:'indian', component: IndianComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
