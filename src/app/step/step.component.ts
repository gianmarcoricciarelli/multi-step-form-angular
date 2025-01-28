import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { StepInfo, stepInfos } from '../../constants'
import { StepSelectionService } from '../step-selection.service'
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

    constructor(private stepSelectionService: StepSelectionService) {}

    ngOnInit(): void {
        this.stepSelectionService.selectedStep$.subscribe((selectedStep) => {
            console.log(selectedStep)
            this.selectedStep = selectedStep
            this.stepInfo = stepInfos[selectedStep]
        })
    }
}
