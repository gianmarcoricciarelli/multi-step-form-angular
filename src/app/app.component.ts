import { Component } from '@angular/core'
import { NextStepComponent } from './next-step/next-step.component'
import { SideBarComponent } from './side-bar/side-bar.component'
import { StepComponent } from './step/step.component'

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [SideBarComponent, StepComponent, NextStepComponent],
})
export class AppComponent {
    title = 'multi-step-form'
}
