import { Injectable, signal } from "@angular/core";
import { InvestimentInput } from "../../user/user-input/investiment-input.model";
import { Investment } from "./investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
investmentResults = signal<Investment[] | undefined>(undefined);
    CalculateInvestmentResults(investimentInput: InvestimentInput) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } =
          investimentInput;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        this.investmentResults.set(annualData);
      }
}