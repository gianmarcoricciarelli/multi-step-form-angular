import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export type FirstStepFormError = {
    name: boolean
    email: boolean
    phone: boolean
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

    private firstStepName = new BehaviorSubject('')
    firstStepName$ = this.firstStepName.asObservable()
    getFirstStepName() {
        return this.firstStepName.getValue()
    }
    setFirstStepName(name: string) {
        this.firstStepName.next(name)
    }
    private firstStepEmail = new BehaviorSubject('')
    firstStepMail$ = this.firstStepEmail.asObservable()
    getFirstStepEmail() {
        return this.firstStepEmail.getValue()
    }
    setFirstStepMail(email: string) {
        this.firstStepEmail.next(email)
    }
    private firstStepPhone = new BehaviorSubject('')
    firstStepPhone$ = this.firstStepPhone.asObservable()
    getFirstStepPhone() {
        return this.firstStepPhone.getValue()
    }
    setFirstStepPhone(phone: string) {
        this.firstStepPhone.next(phone)
    }
    private firstStepFormError = new BehaviorSubject<FirstStepFormError>({
        name: false,
        email: false,
        phone: false,
    })
    firstStepFormError$ = this.firstStepFormError.asObservable()
    getFirstStepFormError() {
        return this.firstStepFormError.getValue()
    }
    setFirstStepFormError(error: FirstStepFormError) {
        this.firstStepFormError.next(error)
    }

    constructor() {}
}
