import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../shared/chip/chip.component';
import { ChipContainerComponent } from './chip-container/chip-container.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { UserContainerComponent } from './user-container/user-container.component';


@NgModule({
  declarations: [ChipComponent, ChipContainerComponent, ProfileImageComponent, UserContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChipComponent,
    ChipContainerComponent,
    ProfileImageComponent,
    UserContainerComponent
  ]
})
export class SharedModule { }
