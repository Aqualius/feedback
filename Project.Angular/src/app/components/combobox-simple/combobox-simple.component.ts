import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-combobox-simple',
  templateUrl: './combobox-simple.component.html',
  styleUrls: ['./combobox-simple.component.css']
})
export class ComboboxSimpleComponent {
  @Input() plh : string;
  @Input() plh_focus : string;
  @Input() options? : string[];
  @Input() error_text : string;
  @Output() change_data = new EventEmitter<string>()

  plh_text = '';
  
  ngOnInit() {
    this.plh_text = this.plh;
  }

  onBlurEvent(event: any) {
    if (event.target.value == ''){
      this.plh_text = this.plh;
    }
    this.change_data.emit(event.target.value);
  }

  onFocusEvent(event: any) {
    this.plh_text = this.plh_focus;
  }
}
