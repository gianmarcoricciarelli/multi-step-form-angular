import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { Plan, PlanBilling, plansWithBillings } from '../../../constants'
import { SecondStepFormService } from '../../services/second-step.service'

@Component({
    selector: 'second-step',
    imports: [NgClass],
    templateUrl: './second-step.component.html',
    styleUrl: './second-step.component.scss',
})
export class SecondStepComponent {
    plansAndBillings: { name: Plan; billing: PlanBilling }[] = Object.entries(
        plansWithBillings,
    ).map(([planName, planBilling]) => ({
        name: planName as Plan,
        billing: planBilling,
    }))

    constructor(private secondStepFormService: SecondStepFormService) {}

    get secondStepName() {
        return this.secondStepFormService.secondStepForm.name
    }
    get secondStepBilling() {
        return this.secondStepFormService.secondStepForm.billing
    }

    onPlanClick(planName: Plan) {
        this.secondStepFormService.secondStepForm = {
            name: planName,
            billing: this.secondStepFormService.secondStepForm.billing,
        }
    }

    onToggleClick() {
        if (this.secondStepFormService.secondStepForm.billing === 'monthly') {
            this.secondStepFormService.secondStepForm = {
                name: this.secondStepFormService.secondStepForm.name,
                billing: 'yearly',
            }
        } else {
            this.secondStepFormService.secondStepForm = {
                name: this.secondStepFormService.secondStepForm.name,
                billing: 'monthly',
            }
        }
    }
}
