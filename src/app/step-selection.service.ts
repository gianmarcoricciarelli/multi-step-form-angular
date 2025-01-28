import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class StepSelectionService {
    private selectedStep = new BehaviorSubject<number>(1)
    selectedStep$ = this.selectedStep.asObservable()

    constructor() {}

    setSelectedStep(step: number) {
        this.selectedStep.next(step)
    }
}
