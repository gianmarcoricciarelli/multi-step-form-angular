import { Component } from '@angular/core'
import { StepperButtonComponent } from './stepper-button/stepper-button.component'

@Component({
    selector: 'side-bar',
    imports: [StepperButtonComponent],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {}
