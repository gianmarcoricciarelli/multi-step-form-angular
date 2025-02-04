import { Component, HostListener, input, OnInit } from '@angular/core'
import { FirstStepFormService } from '../../services/first-step-form.service'

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

    constructor(private FirstStepFormService: FirstStepFormService) {}
    ngOnInit(): void {
        this.FirstStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.isSelected = selectedStep === this.stepNumber()
        })
    }

    @HostListener('click') onStepButtonClick() {
        this.FirstStepFormService.setSelectedStep(this.stepNumber())
    }
}
