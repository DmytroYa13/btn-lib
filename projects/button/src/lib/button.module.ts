import { NgModule } from '@angular/core';
import { CstButtonComponent } from './components/button/button.component';
import { CstButtonGroupComponent } from './components/button-group/button-group.component';



@NgModule({
  declarations: [
    CstButtonComponent,
    CstButtonGroupComponent
  ],
  imports: [
  ],
  exports: [
    CstButtonComponent,
    CstButtonGroupComponent
  ]
})
export class CstButtonModule { }
