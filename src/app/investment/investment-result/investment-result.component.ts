import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);
  // we use get here to make sure that the investmentResults is available in the template
  // get investmentResults() {
  //   return this.investmentService.investmentResults;
  // }

  //we use computed here to make sure that the investmentResults is not modified outside the service
  //because computed provides a read-only value
  investmentResults = computed(() =>
    this.investmentService.investmentResults()
  );
  //you can also use the following code to make sure that the investmentResults is not modified outside the service
  //investmentResults = this.investmentService.investmentResults.asReadonly();
}
