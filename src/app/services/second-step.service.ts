import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Billing, Plan } from '../../constants'

@Injectable({
    providedIn: 'root',
})
export class SecondStepFormService {
    constructor() {}

    private secondStepForm = new BehaviorSubject<{
        name: Plan
        billing: Billing
    }>({ name: 'Arcade', billing: 'monthly' })
    secondStepForm$ = this.secondStepForm.asObservable()
    getSecondStepForm() {
        return this.secondStepForm.getValue()
    }
    setSecondStepForm(selectedPlanAndBilling: {
        name: Plan
        billing: Billing
    }) {
        this.secondStepForm.next(selectedPlanAndBilling)
    }
}
