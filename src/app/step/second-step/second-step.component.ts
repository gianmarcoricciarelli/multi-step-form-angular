import { NgClass } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
    Billing,
    Plan,
    PlanBilling,
    plansWithBillings,
} from '../../../constants'
import { MultiStepFormService } from '../../services/multi-step-form.service'

@Component({
    selector: 'second-step',
    imports: [NgClass],
    templateUrl: './second-step.component.html',
    styleUrl: './second-step.component.scss',
})
export class SecondStepComponent implements OnInit {
    plansAndBillings: { name: Plan; billing: PlanBilling }[] = Object.entries(
        plansWithBillings,
    ).map(([planName, planBilling]) => ({
        name: planName as Plan,
        billing: planBilling,
    }))
    selectedPlanAndBilling: { name: Plan; billing: Billing } | undefined =
        undefined

    constructor(private multiStepFormService: MultiStepFormService) {}

    ngOnInit(): void {
        this.multiStepFormService.secondStepForm$.subscribe(
            (selectedPlanAndBilling) => {
                this.selectedPlanAndBilling = selectedPlanAndBilling
            },
        )
    }

    onPlanClick(planName: Plan) {
        if (!this.multiStepFormService.getSecondStepForm()) {
            this.multiStepFormService.setSecondStepForm({
                name: planName,
                billing: 'monthly',
            })
        } else {
            this.multiStepFormService.setSecondStepForm({
                name: planName,
                billing: this.multiStepFormService.getSecondStepForm()!.billing,
            })
        }
    }
}
