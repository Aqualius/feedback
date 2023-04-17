import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-captcha-simple',
  templateUrl: './captcha-simple.component.html',
  styleUrls: ['./captcha-simple.component.css']
})
export class CaptchaSimpleComponent {
  @Input() error_text: string;
  @ViewChild('user_key') user_key: ElementRef;
  @Output() check_captcha = new EventEmitter<boolean>();
  key = '';

  constructor(){
    this.generate();
  }

  generate(){
    this.key = '';
    const randomchar = "0123456789";
    for (let i = 0; i < 6; i++) {
      this.key += randomchar.charAt(
          Math.random() * randomchar.length)
    }
  }

  checkKey(){
      this.user_key.nativeElement.style.border = '';
    if (this.user_key.nativeElement.value == ''){
      this.error_text = 'Введите код'
    }
    else if (this.user_key.nativeElement.value !== this.key){
      this.error_text = 'Ошибка. Введите код заново'
      this.user_key.nativeElement.value = ''
      this.generate()
    }
    else{
      this.error_text = '';
      this.check_captcha.emit(true);
      this.user_key.nativeElement.style.border = 'green 2px solid';
    }
  }
  
}
