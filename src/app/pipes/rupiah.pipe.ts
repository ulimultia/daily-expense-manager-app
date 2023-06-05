import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiahPipe',
})
export class RupiahPipe implements PipeTransform {
  constructor(private currencyPipe:CurrencyPipe){}

  transform(value: number): string {
    let output = (value > 0 ? '+' : '') + this.currencyPipe.transform(value,'IDR','Rp ','1.0-0')
    return output;
  }

}
