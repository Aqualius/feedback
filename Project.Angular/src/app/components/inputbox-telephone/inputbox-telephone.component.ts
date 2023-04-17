import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputbox-telephone',
  templateUrl: './inputbox-telephone.component.html',
  styleUrls: ['./inputbox-telephone.component.css']
})
export class InputboxTelephoneComponent {
  @Input() plh_text : string;
  @Input() error_text : string;
  @Output() change_data = new EventEmitter<string>()

  onBlurEvent(event: any) {
    this.change_data.emit(event.target.value);
  }

  onChange(event: any) {
    var newVal = event.target.value.replace('+7', '').replace(/\D/g, '');
    if(newVal.length == 0) {
      newVal = '';
    } 
    else if(newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '$1');
    } else if(newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '$1$2');
    } else {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1$2$3');
    }
    event.target.value = '+7' + newVal;  
  }
}
