import { NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { z } from 'zod'
import {
    FirstStepForm,
    FirstStepFormService,
} from '../services/first-step-form.service'

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

    constructor(private FirstStepFormService: FirstStepFormService) {}

    ngOnInit(): void {
        this.FirstStepFormService.selectedStep$.subscribe((selectedStep) => {
            this.selectedStep = selectedStep
        })

        this.FirstStepFormService.firstStepForm$.subscribe(
            (firstStepForm: FirstStepForm) => {
                this.firstStepForm = firstStepForm
            },
        )
    }

    onButtonClick() {
        switch (this.selectedStep) {
            case 1:
                const firstStepValidationSchema = z.object({
                    name: z.string().min(1, 'This field is required'),
                    email: z
                        .string()
                        .min(1, 'This field is required')
                        .email('This field must be a valid email'),
                    phone: z.string().min(1, 'This field is required'),
                })
                const parsedFormValues = firstStepValidationSchema.safeParse(
                    this.firstStepForm,
                )

                if (!parsedFormValues.success) {
                    const errors = parsedFormValues.error.flatten().fieldErrors
                    this.FirstStepFormService.setFirstStepFormError({
                        name: errors.name?.[0] || '',
                        email: errors.email?.[0] || '',
                        phone: errors.phone?.[0] || '',
                    })
                } else {
                    this.FirstStepFormService.setSelectedStep(2)
                }
                break
            case 2:
                console.log('2')
                break
            case 3:
                console.log('3')
                break
            default:
                console.log('4')
                break
        }
    }

    onGoBackClick() {
        this.FirstStepFormService.setSelectedStep(this.selectedStep - 1)
    }
}
