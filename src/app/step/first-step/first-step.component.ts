import { NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import {
    FirstStepFormError,
    FirstStepFormService,
} from '../../services/first-step-form.service'

@Component({
    selector: 'first-step',
    imports: [NgIf, ReactiveFormsModule],
    templateUrl: './first-step.component.html',
    styleUrl: './first-step.component.scss',
})
export class FirstStepComponent implements OnInit {
    firstStepFormGroup!: FormGroup
    formError!: FirstStepFormError

    constructor(private FirstStepFormService: FirstStepFormService) {}

    ngOnInit(): void {
        this.firstStepFormGroup = new FormGroup({
            name: new FormControl(
                this.FirstStepFormService.getFirstStepForm().name,
            ),
            email: new FormControl(
                this.FirstStepFormService.getFirstStepForm().email,
            ),
            phone: new FormControl(
                this.FirstStepFormService.getFirstStepForm().phone,
            ),
        })
        this.formError = this.FirstStepFormService.getFirstStepFormError()

        this.firstStepFormGroup
            .get('name')
            ?.valueChanges.subscribe((name: string) => {
                this.FirstStepFormService.setFirstStepForm({ name })
                this.FirstStepFormService.setFirstStepFormError({ name: '' })
            })
        this.firstStepFormGroup
            .get('email')
            ?.valueChanges.subscribe((email: string) => {
                this.FirstStepFormService.setFirstStepForm({ email })
                this.FirstStepFormService.setFirstStepFormError({ email: '' })
            })
        this.firstStepFormGroup
            .get('phone')
            ?.valueChanges.subscribe((phone: string) => {
                this.FirstStepFormService.setFirstStepForm({ phone })
                this.FirstStepFormService.setFirstStepFormError({ phone: '' })
            })

        this.FirstStepFormService.firstStepFormError$.subscribe((error) => {
            this.formError = error
        })
    }
}
