import { Component } from '@angular/core'
import { AddOn, addOns } from '../../../constants'
import { SecondStepFormService } from '../../services/second-step.service'
import { ThirdStepService } from '../../services/third-step.service'

@Component({
    selector: 'third-step',
    imports: [],
    templateUrl: './third-step.component.html',
    styleUrl: './third-step.component.scss',
})
export class ThirdStepComponent {
    availableAddOns = addOns

    get selectedAddonsNames() {
        return this.thirdStepService.selectedAddons.map((addOn) => addOn.name)
    }

    get billing() {
        return this.secondStepService.secondStepForm.billing
    }

    constructor(
        private secondStepService: SecondStepFormService,
        private thirdStepService: ThirdStepService,
    ) {}

    onAddOnClick(addOn: AddOn) {
        if (
            this.thirdStepService.selectedAddons
                .map((aO) => aO.name)
                .includes(addOn.name)
        ) {
            this.thirdStepService.selectedAddons =
                this.thirdStepService.selectedAddons.filter(
                    (aO) => aO.name !== addOn.name,
                )
        } else {
            this.thirdStepService.selectedAddons = [
                ...this.thirdStepService.selectedAddons,
                addOn,
            ]
        }
    }
}
