import { Component, OnInit } from '@angular/core'; 
import { trigger, style, transition, animate, keyframes, query, 
  stagger, state, group } from '@angular/animations';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  animations: [
    trigger('valueAnimation', [
      transition(':increment', group([
        query(':enter', [
          style({ color: 'green', fontSize: '50px' }),
          animate('0.8s ease-out', style('*'))
        ])
      ])),
      transition(':decrement', group([
        query(':enter', [
          style({ color: 'red', fontSize: '50px' }),
          animate('0.8s ease-out', style('*'))
        ])
      ]))
    ])
  ]
})
export class CreditCardComponent implements OnInit {

  creditCard:string  = '';
  creditCardText:string = '#### #### #### #####';
  month: string  = '##';
  year: string = '##';

  myModel:any;
  constructor() { }

  ngOnInit() {   
  }

  getInputValue(){
    console.log(this.creditCard);
  }
  selectChangeCard(event){
    this.creditCardText = this.creditCard;
  }

  validate()
  {
    console.log("LOGGGG");
    return true;
  }

  selectChangeMonth(event){ 
    this.month = event.target.value;
  }

  selectChangeYear(event){ 
    this.year = event.target.value;
  }
}
