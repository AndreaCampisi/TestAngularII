import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { InvestmentResultComponent } from './investment/investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
