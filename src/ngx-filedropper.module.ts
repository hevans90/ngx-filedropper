import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxFiledropperComponent } from './ngx-filedropper.component';
import { NgxFiledropperDirective } from './ngx-filedropper.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxFiledropperComponent,
    NgxFiledropperDirective
  ],
  exports: [NgxFiledropperComponent]
})

export class NgxFiledropperModule { }