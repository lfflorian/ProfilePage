import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../shared/chip/chip.component';


@NgModule({
  declarations: [ChipComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChipComponent
  ]
})
export class SharedModule { }
