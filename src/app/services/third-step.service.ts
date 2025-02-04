import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AddOn } from '../../constants'

@Injectable({
    providedIn: 'root',
})
export class ThirdStepService {
    private _selectedAddons = new BehaviorSubject<AddOn[]>([])

    get selectedAddons() {
        return this._selectedAddons.getValue()
    }

    set selectedAddons(addOns: AddOn[]) {
        this._selectedAddons.next(addOns)
    }

    constructor() {}
}
