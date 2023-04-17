import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild ('messagebox') messagebox:ElementRef;

  public themes?: string[];
  public data : Data;
  public check_captcha : boolean;
  public email_from_request : string;

  public error_name = '';
  public error_email = '';
  public error_tel = '';
  public error_theme = '';
  public error_message = '';
  public error_captcha = '';
  
  constructor(private http: HttpClient){ 
    this.data = new Data('', '', '', '', '');
    this.check_captcha = false;

    this.getThemes();
  }
  postData(){
    if (!this.checkValue()){
      return null;
    }
    
    return this.http.post('api/datafeedback', this.data, {observe: 'response', responseType: 'text'}).subscribe({
      next:(data: any) => {
        this.messagebox.nativeElement.classList.add('model-open');
        this.email_from_request=data.body;
      },
      error: error => console.log(error)}); 
  }
  
  getThemes(){
    this.http.get<string[]>('api/themes').subscribe(result => {
      this.themes = result;
    }, error => console.error(error));
  }

  onChangeName(name: any){
    if (name == ''){
      this.error_name = "Имя не может быть пустым";
    }
    else{
      this.error_name = '';
      this.data.name = name;
    }
  }
  
  onChangeEmail(email: any){
    var re = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$");
    if (email == ''){
      this.error_email = "Email не может быть пустым";
    }
    else if (!re.test(email)){
      this.error_email = "Email некорректный";
    }
    else{
      this.error_email = '';
      this.data.email = email;
    }
  }
  
  onChangeTel(tel: any){
    if (tel == ''){
      this.error_tel = "Телефон не может быть пустым";
    }
    else if (tel.length < 12){
      this.error_tel = "Телефон некорректный";
    }
    else{
      this.error_tel = '';
      this.data.telephone = tel;
    }
  }
  
  onChangeTheme(theme: any){
    if (theme == ''){
      this.error_theme = "Тема не может быть пустой";
    }
    else{
      this.error_theme = '';
      this.data.theme = theme;
    }
  }

  onChangeMessage(mes: any){
    if (mes.length < 20){
      this.error_message = "Сообщение должно быть не менее 20 символов";
    }
    else{
      this.error_message = '';
      this.data.message = mes;
    }
  }

  checkCaptcha(key:boolean){
    if (key) {
      this.check_captcha = true;
    }
  }

  checkValue(){
    this.onChangeName(this.data.name);
    this.onChangeEmail(this.data.email);
    this.onChangeTel(this.data.telephone);
    this.onChangeTheme(this.data.theme);
    this.onChangeMessage(this.data.message);
    if (!this.check_captcha) {
      this.error_captcha = 'Введите код';
      return false;
    }
    if (this.error_name !== '' || this.error_email !== '' || this.error_tel !== '' || this.error_theme !== '' || this.error_message !== ''){
      return false;
    }
    return true;
  }

  hideMessageBox(){
    this.messagebox.nativeElement.classList.remove('model-open');
    window.location.reload();
  }
}

export class Data {
  constructor(
    public name?: string,
    public email?: string,
    public telephone?: string,
    public theme?: string,
    public message?: string,
  ) {}
}