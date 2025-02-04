import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AddOn } from '../../constants'

@Injectable({
    providedIn: 'root',
})
export class ThirdStepService {
    private selectedAddons = new BehaviorSubject<AddOn[]>([])
    selectedAddons$ = this.selectedAddons.asObservable()
    getSelectedAddons() {
        return this.selectedAddons.getValue()
    }
    setSelectedAddons(addOns: AddOn[]) {
        this.selectedAddons.next(addOns)
    }

    constructor() {}
}
