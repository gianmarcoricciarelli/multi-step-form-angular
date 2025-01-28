import { Component, OnInit } from '@angular/core'
import { StepInfo, stepInfos } from '../../../constants'
import { StepSelectionService } from '../../step-selection.service'

@Component({
    selector: 'form-content',
    imports: [],
    templateUrl: './form-content.component.html',
    styleUrl: './form-content.component.scss',
})
export class FormContentComponent implements OnInit {
    selectedStep: number = 1
    stepInfo: StepInfo = stepInfos[1]

    constructor(private stepSelectionService: StepSelectionService) {}

    ngOnInit(): void {
        this.stepSelectionService.selectedStep$.subscribe((selectedStep) => {
            this.selectedStep = selectedStep
            this.stepInfo = stepInfos[selectedStep]
        })
    }
}
