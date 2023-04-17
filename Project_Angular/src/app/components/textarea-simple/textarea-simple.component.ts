import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea-simple',
  templateUrl: './textarea-simple.component.html',
  styleUrls: ['./textarea-simple.component.css']
})
export class TextareaSimpleComponent {
  @Input() error_text : string;
  @Output() change_data = new EventEmitter<string>()

  onBlurEvent(event: any) {
    this.change_data.emit(event.target.value);
  }
}
