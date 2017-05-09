import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFiledropperComponent } from './ngx-filedropper.component';
import { NgxFiledropperDirective } from './ngx-filedropper.directive';

export * from './ngx-filedropper.component';
export * from './ngx-filedropper.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxFiledropperComponent,
    NgxFiledropperDirective,
  ],
  exports: [
    NgxFiledropperComponent,
    NgxFiledropperDirective,
  ]
})
export class NgxFiledropperModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxFiledropperModule
    };
  }
}
