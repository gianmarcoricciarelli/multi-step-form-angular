import { Component } from '@angular/core'
import { StepperButtonComponent } from './stepper-button/stepper-button.component'

@Component({
    selector: 'app-stepper',
    imports: [StepperButtonComponent],
    templateUrl: './stepper.component.html',
    styleUrl: './stepper.component.scss',
})
export class StepperComponent {
    onStepClick(step: number) {
        console.log(`clicked on child ${step}`)
    }
}
