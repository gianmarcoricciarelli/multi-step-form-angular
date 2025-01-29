import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

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

    constructor() {}
}
