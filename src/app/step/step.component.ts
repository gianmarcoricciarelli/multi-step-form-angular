import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { StepInfo, stepInfos } from '../../constants'
import { MultiStepFormService } from '../services/multi-step-form.service'
import { FirstStepComponent } from './first-step/first-step.component'

@Component({
    selector: 'step',
    imports: [NgIf, FirstStepComponent],
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
            this.stepInfo = stepInfos[selectedStep]
        })
    }
}
