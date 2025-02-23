import { Component, Input } from '@angular/core';
import { CalculateData } from '../../user/user-input/calculateData.model';

@Component({
  selector: 'app-investment-result',
  standalone:true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input() calculateData!: CalculateData;

}

function calculateInvestmentResults(calculateData: CalculateData) {
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

  return annualData;
}