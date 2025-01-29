import { Component, HostListener, input, OnInit } from '@angular/core'
import { MultiStepFormService } from '../../services/multi-step-form.service'

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

    constructor(private MultiStepFormService: MultiStepFormService) {}
    ngOnInit(): void {
        this.MultiStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.isSelected = selectedStep === this.stepNumber()
        })
    }

    @HostListener('click') onStepButtonClick() {
        this.MultiStepFormService.setSelectedStep(this.stepNumber())
    }
}
