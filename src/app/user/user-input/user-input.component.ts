import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculateData } from './calculateData.model';


@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() Calculate = new EventEmitter<CalculateData>();
  
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  onSubmit() {
    this.Calculate.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });
  }

}
