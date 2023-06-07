import { Component, EventEmitter, Input, Output } from '@angular/core';

export type InputType = "text" | "number" | "category" | "date"
export type InputAppearance = "fill" | "outline"

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: InputType = "text";
  @Input() label: string = "";
  @Input() value: any = null;
  @Input() placeholder: string = "";
  @Input() min: number = 0;
  @Input() appearance: InputAppearance = "outline"
  @Input() name: string = ""

  @Output() valueChange = new EventEmitter<any>()
}