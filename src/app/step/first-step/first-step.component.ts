import { NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import {
    FirstStepFormError,
    MultiStepFormService,
} from '../../services/multi-step-form.service'

@Component({
    selector: 'first-step',
    imports: [NgIf, ReactiveFormsModule],
    templateUrl: './first-step.component.html',
    styleUrl: './first-step.component.scss',
})
export class FirstStepComponent implements OnInit {
    firstStepFormGroup!: FormGroup
    formError!: FirstStepFormError

    constructor(private MultiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.firstStepFormGroup = new FormGroup({
            name: new FormControl(
                this.MultiStepFormService.getFirstStepForm().name
            ),
            email: new FormControl(
                this.MultiStepFormService.getFirstStepForm().email
            ),
            phone: new FormControl(
                this.MultiStepFormService.getFirstStepForm().phone
            ),
        })
        this.formError = this.MultiStepFormService.getFirstStepFormError()

        this.firstStepFormGroup
            .get('name')
            ?.valueChanges.subscribe((name: string) => {
                this.MultiStepFormService.setFirstStepForm({ name })
                this.MultiStepFormService.setFirstStepFormError({ name: '' })
            })
        this.firstStepFormGroup
            .get('email')
            ?.valueChanges.subscribe((email: string) => {
                this.MultiStepFormService.setFirstStepForm({ email })
                this.MultiStepFormService.setFirstStepFormError({ email: '' })
            })
        this.firstStepFormGroup
            .get('phone')
            ?.valueChanges.subscribe((phone: string) => {
                this.MultiStepFormService.setFirstStepForm({ phone })
                this.MultiStepFormService.setFirstStepFormError({ phone: '' })
            })

        this.MultiStepFormService.firstStepFormError$.subscribe((error) => {
            this.formError = error
        })
    }
}
