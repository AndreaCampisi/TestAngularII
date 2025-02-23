import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../investment/investment-result/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enterdInitialInvestment = signal('0');
  enterdAnnualInvestment = signal('0');
  enterdExpectedReturn = signal('5');
  enterdDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enterdInitialInvestment(),
      annualInvestment: +this.enterdAnnualInvestment(),
      expectedReturn: +this.enterdExpectedReturn(),
      duration: +this.enterdDuration(),
    });
    this.enterdInitialInvestment.set('0');
    this.enterdAnnualInvestment.set('0');
    this.enterdExpectedReturn.set('5');
    this.enterdDuration.set('10');
  }
}
