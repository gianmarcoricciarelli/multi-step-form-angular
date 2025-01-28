import { Component } from '@angular/core'
import { StepperComponent } from './stepper/stepper.component'

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [StepperComponent],
})
export class AppComponent {
    title = 'multi-step-form'
}
