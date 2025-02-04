import { NgClass } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
    Billing,
    Plan,
    PlanBilling,
    plansWithBillings,
} from '../../../constants'
import { SecondStepFormService } from '../../services/second-step.service'

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

    constructor(private secondStepFormService: SecondStepFormService) {}

    ngOnInit(): void {
        this.secondStepFormService.secondStepForm$.subscribe(
            (selectedPlanAndBilling) => {
                this.selectedPlanAndBilling = selectedPlanAndBilling
            },
        )
    }

    onPlanClick(planName: Plan) {
        if (!this.secondStepFormService.getSecondStepForm()) {
            this.secondStepFormService.setSecondStepForm({
                name: planName,
                billing: 'monthly',
            })
        } else {
            this.secondStepFormService.setSecondStepForm({
                name: planName,
                billing:
                    this.secondStepFormService.getSecondStepForm()!.billing,
            })
        }
    }
}
