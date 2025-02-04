import { Component, OnInit } from '@angular/core'
import { AddOn, addOns, Billing } from '../../../constants'
import { SecondStepFormService } from '../../services/second-step.service'
import { ThirdStepService } from '../../services/third-step.service'

@Component({
    selector: 'third-step',
    imports: [],
    templateUrl: './third-step.component.html',
    styleUrl: './third-step.component.scss',
})
export class ThirdStepComponent implements OnInit {
    availableAddOns = addOns
    selectedAddons!: AddOn[]
    billing!: Billing

    get selectedAddonsNames() {
        return this.selectedAddons.map((addOn) => addOn.name)
    }

    constructor(
        private secondStepService: SecondStepFormService,
        private thirdStepService: ThirdStepService,
    ) {}

    ngOnInit(): void {
        this.secondStepService.secondStepForm$.subscribe(
            (selectedPlanAndBilling) => {
                this.billing = selectedPlanAndBilling.billing
            },
        )
        this.thirdStepService.selectedAddons$.subscribe((addOns) => {
            this.selectedAddons = addOns
        })
    }

    onAddOnClick(addOn: AddOn) {
        if (this.selectedAddons.map((aO) => aO.name).includes(addOn.name)) {
            this.thirdStepService.setSelectedAddons(
                this.selectedAddons.filter((aO) => aO.name !== addOn.name),
            )
        } else {
            this.thirdStepService.setSelectedAddons([
                ...this.selectedAddons,
                addOn,
            ])
        }
    }
}
