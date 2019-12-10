import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'',
  component:CreditCardComponent
  }
]

@NgModule({
  declarations: [CreditCardComponent, CreditCardDirective],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BankModule { }
