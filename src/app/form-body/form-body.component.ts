import { Component } from '@angular/core'
import { FormContentComponent } from './form-content/form-content.component'
import { StepperButtonComponent } from './stepper-button/stepper-button.component'

@Component({
    selector: 'form-body',
    imports: [StepperButtonComponent, FormContentComponent],
    templateUrl: './form-body.component.html',
    styleUrl: './form-body.component.scss',
})
export class FormBodyComponent {}
