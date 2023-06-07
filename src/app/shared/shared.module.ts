import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RupiahPipe } from '../pipes/rupiah.pipe';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [RupiahPipe],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [RupiahPipe]
})
export class SharedModule { }
