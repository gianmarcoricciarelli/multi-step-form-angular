import { Component, HostListener, input, OnInit } from '@angular/core'
import { StepSelectionService } from '../../step-selection.service'

@Component({
    selector: 'stepper-button',
    host: {
        '[class.selected]': 'isSelected',
    },
    imports: [],
    templateUrl: './stepper-button.component.html',
    styleUrl: './stepper-button.component.scss',
})
export class StepperButtonComponent implements OnInit {
    stepNumber = input.required<number>()
    isSelected = false

    constructor(private stepSelectionService: StepSelectionService) {}
    ngOnInit(): void {
        this.stepSelectionService.selectedStep$.subscribe((selectedStep) => {
            this.isSelected = selectedStep === this.stepNumber()
        })
    }

    @HostListener('click') onStepButtonClick() {
        this.stepSelectionService.setSelectedStep(this.stepNumber())
    }
}
