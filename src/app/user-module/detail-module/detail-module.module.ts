import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailModuleComponent } from './detail-module.component';

@NgModule({
  declarations: [DetailModuleComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    DetailModuleComponent
  ]
})
export class DetailModuleModule { }
