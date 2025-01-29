import { Component } from '@angular/core'
import { plansBilling } from '../../../constants'

@Component({
    selector: 'second-step',
    imports: [],
    templateUrl: './second-step.component.html',
    styleUrl: './second-step.component.scss',
})
export class SecondStepComponent {
    plansAndBillings = Object.entries(plansBilling).map(
        ([planName, planBilling]) => ({ name: planName, billing: planBilling }),
    )
}
