import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestimentInput } from './investiment-input.model';



@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() Calculate = new EventEmitter<InvestimentInput>();
  
  enterdInitialInvestment = '0';
  enterdAnnualInvestment = '0';
  enterdExpectedReturn = '5';
  enterdDuration = '10';

  onSubmit() {
    this.Calculate.emit({
      initialInvestment: +this.enterdInitialInvestment,
      annualInvestment: +this.enterdAnnualInvestment,
      expectedReturn: +this.enterdExpectedReturn,
      duration: +this.enterdDuration
    });
  }

}
