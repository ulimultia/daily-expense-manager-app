import { Component, Input } from '@angular/core';

export type InputType = "text" | "number" | "category"

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: InputType = "text";
  @Input() label: string = "";
}
