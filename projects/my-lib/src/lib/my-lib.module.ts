import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    MyLibComponent,
    DemoComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
