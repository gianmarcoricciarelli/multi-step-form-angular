import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import {
    FirstStepFormError,
    MultiStepFormService,
} from '../../services/multi-step-form.service'

@Component({
    selector: 'first-step',
    imports: [ReactiveFormsModule],
    templateUrl: './first-step.component.html',
    styleUrl: './first-step.component.scss',
})
export class FirstStepComponent implements OnInit {
    firstStepFormGroup!: FormGroup
    formError: FirstStepFormError = {
        name: false,
        email: false,
        phone: false,
    }

    constructor(private MultiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.firstStepFormGroup = new FormGroup({
            name: new FormControl(this.MultiStepFormService.getFirstStepName()),
            email: new FormControl(
                this.MultiStepFormService.getFirstStepEmail()
            ),
            phone: new FormControl(
                this.MultiStepFormService.getFirstStepPhone()
            ),
        })

        this.firstStepFormGroup.get('name')?.valueChanges.subscribe((name) => {
            this.MultiStepFormService.setFirstStepName(name)
        })
        this.firstStepFormGroup.get('mail')?.valueChanges.subscribe((mail) => {
            this.MultiStepFormService.setFirstStepMail(mail)
        })
        this.firstStepFormGroup
            .get('phone')
            ?.valueChanges.subscribe((phone) => {
                this.MultiStepFormService.setFirstStepPhone(phone)
            })

        this.MultiStepFormService.firstStepFormError$.subscribe((error) => {
            this.formError = error
        })
    }
}
