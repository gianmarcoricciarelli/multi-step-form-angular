import { NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MultiStepFormService } from '../services/multi-step-form.service'

@Component({
    selector: 'next-step',
    host: {
        '[class.first-step]': 'selectedStep === 1',
        '[class.last-step]': 'selectedStep === 4',
    },
    imports: [NgIf],
    templateUrl: './next-step.component.html',
    styleUrl: './next-step.component.scss',
})
export class NextStepComponent implements OnInit {
    selectedStep = 1

    constructor(private MultiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.MultiStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.selectedStep = selectedStep
        })
    }
}
