import { NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
    FirstStepForm,
    MultiStepFormService,
} from '../services/multi-step-form.service'

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

    firstStepForm: FirstStepForm = {
        name: '',
        email: '',
        phone: '',
    }

    constructor(private MultiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.MultiStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.selectedStep = selectedStep
        })

        this.MultiStepFormService.firstStepForm$.subscribe(
            (firstStepForm: FirstStepForm) => {
                this.firstStepForm = firstStepForm
            }
        )
    }
}
