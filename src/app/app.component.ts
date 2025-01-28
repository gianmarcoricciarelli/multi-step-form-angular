import { Component } from '@angular/core'
import { FormBodyComponent } from './form-body/form-body.component'

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [FormBodyComponent],
})
export class AppComponent {
    title = 'multi-step-form'
}
