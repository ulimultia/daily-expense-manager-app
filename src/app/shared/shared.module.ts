import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RupiahPipe } from '../pipes/rupiah.pipe';

@NgModule({
  declarations: [RupiahPipe],
  imports: [
    CommonModule
  ],
  exports: [RupiahPipe]
})
export class SharedModule { }
