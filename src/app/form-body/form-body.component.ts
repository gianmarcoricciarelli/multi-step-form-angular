import { Component } from '@angular/core'
import { StepperButtonComponent } from './stepper-button/stepper-button.component'

@Component({
    selector: 'form-body',
    imports: [StepperButtonComponent],
    templateUrl: './form-body.component.html',
    styleUrl: './form-body.component.scss',
})
export class FormBodyComponent {
    onStepClick(step: number) {
        console.log(`clicked on child ${step}`)
    }
}
