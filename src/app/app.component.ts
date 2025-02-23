import { Component, Output } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { InvestmentResultComponent } from './investment/investment-result/investment-result.component';
import { InvestimentInput } from './user/user-input/investiment-input.model';
import { Investment } from './investment/investment-result/investment.model';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  investmentResults?: Investment[];
  onCalculateInvestmentResults(calculateData: InvestimentInput) {
    const annualData = [];
    let investmentValue = calculateData.initialInvestment;
  
    for (let i = 0; i < calculateData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (calculateData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + calculateData.annualInvestment;
      const totalInterest =
        investmentValue - calculateData.annualInvestment * year - calculateData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: calculateData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: calculateData.initialInvestment + calculateData.annualInvestment * year,
      });
    }
  
    this.investmentResults = annualData;
  }
}



