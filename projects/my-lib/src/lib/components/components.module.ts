import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyListComponent } from './my-list/my-list.component';



@NgModule({
  declarations: [
    MyButtonComponent,
    MyListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
