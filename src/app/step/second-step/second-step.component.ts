import { NgClass } from '@angular/common'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
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
    selectedPlanAndBilling!: { name: Plan; billing: Billing }

    @ViewChild('toggleCircle') toggleCircleRef!: ElementRef<HTMLDivElement>

    constructor(private secondStepFormService: SecondStepFormService) {}

    ngOnInit(): void {
        this.secondStepFormService.secondStepForm$.subscribe(
            (selectedPlanAndBilling) => {
                this.selectedPlanAndBilling = selectedPlanAndBilling
            },
        )
    }

    onPlanClick(planName: Plan) {
        this.secondStepFormService.setSecondStepForm({
            name: planName,
            billing: this.selectedPlanAndBilling.billing,
        })
    }

    onToggleClick() {
        this.toggleCircleRef.nativeElement.classList.toggle(
            'toggle-container__toggle-and-billing__toggle__circle--right',
        )

        if (this.selectedPlanAndBilling?.billing === 'monthly') {
            this.secondStepFormService.setSecondStepForm({
                name: this.selectedPlanAndBilling!.name,
                billing: 'yearly',
            })
        } else {
            this.secondStepFormService.setSecondStepForm({
                name: this.selectedPlanAndBilling!.name,
                billing: 'monthly',
            })
        }
    }
}
