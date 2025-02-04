import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { Step, StepInfo, stepInfos } from '../../constants'
import { FirstStepFormService } from '../services/first-step-form.service'
import { FirstStepComponent } from './first-step/first-step.component'
import { SecondStepComponent } from './second-step/second-step.component'
import { ThirdStepComponent } from './third-step/third-step.component'

@Component({
    selector: 'step',
    imports: [
        NgIf,
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
    ],
    templateUrl: './step.component.html',
    styleUrl: './step.component.scss',
})
export class StepComponent {
    selectedStep: number = 1
    stepInfo: StepInfo = stepInfos[1]

    constructor(private FirstStepFormService: FirstStepFormService) {}

    ngOnInit(): void {
        this.FirstStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.selectedStep = selectedStep
            this.stepInfo = stepInfos[selectedStep.toString() as Step]
        })
    }
}
