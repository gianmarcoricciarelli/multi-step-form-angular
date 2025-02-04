import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Billing, Plan } from '../../constants'

@Injectable({
    providedIn: 'root',
})
export class SecondStepFormService {
    constructor() {}

    private _secondStepForm = new BehaviorSubject<{
        name: Plan
        billing: Billing
    }>({ name: 'Arcade', billing: 'monthly' })

    get secondStepForm() {
        return this._secondStepForm.getValue()
    }

    set secondStepForm(selectedPlanAndBilling: {
        name: Plan
        billing: Billing
    }) {
        this._secondStepForm.next(selectedPlanAndBilling)
    }
}
