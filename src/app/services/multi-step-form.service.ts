import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export type FirstStepFormError = {
    name: string
    email: string
    phone: string
}
export type FirstStepForm = {
    name: string
    email: string
    phone: string
}

@Injectable({
    providedIn: 'root',
})
export class MultiStepFormService {
    private selectedStep = new BehaviorSubject(1)
    selectedStep$ = this.selectedStep.asObservable()
    setSelectedStep(step: number) {
        this.selectedStep.next(step)
    }

    private firstStepForm = new BehaviorSubject<FirstStepForm>({
        name: '',
        email: '',
        phone: '',
    })
    firstStepForm$ = this.firstStepForm.asObservable()
    getFirstStepForm() {
        return this.firstStepForm.getValue()
    }
    setFirstStepForm(newFormValues: Partial<FirstStepForm>) {
        this.firstStepForm.next({
            ...this.firstStepForm.getValue(),
            ...newFormValues,
        })
    }
    private firstStepFormError = new BehaviorSubject<FirstStepFormError>({
        name: '',
        email: '',
        phone: '',
    })
    firstStepFormError$ = this.firstStepFormError.asObservable()
    getFirstStepFormError() {
        return this.firstStepFormError.getValue()
    }
    setFirstStepFormError(error: Partial<FirstStepFormError>) {
        this.firstStepFormError.next({
            ...this.firstStepFormError.getValue(),
            ...error,
        })
    }

    constructor() {}
}
