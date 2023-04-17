import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputbox-simple',
  templateUrl: './inputbox-simple.component.html',
  styleUrls: ['./inputbox-simple.component.css']
})
export class InputboxSimpleComponent {
  @Input() plh : string;
  @Input() plh_focus : string;
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
