import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { Step, StepInfo, stepInfos } from '../../constants'
import { MultiStepFormService } from '../services/multi-step-form.service'
import { FirstStepComponent } from './first-step/first-step.component'
import { SecondStepComponent } from './second-step/second-step.component'

@Component({
    selector: 'step',
    imports: [NgIf, FirstStepComponent, SecondStepComponent],
    templateUrl: './step.component.html',
    styleUrl: './step.component.scss',
})
export class StepComponent {
    selectedStep: number = 1
    stepInfo: StepInfo = stepInfos[1]

    constructor(private MultiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.MultiStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.selectedStep = selectedStep
            this.stepInfo = stepInfos[selectedStep.toString() as Step]
        })
    }
}
