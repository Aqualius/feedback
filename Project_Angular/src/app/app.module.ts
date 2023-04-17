import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputboxSimpleComponent } from './components/inputbox-simple/inputbox-simple.component';
import { ComboboxSimpleComponent } from './components/combobox-simple/combobox-simple.component';
import { TextareaSimpleComponent } from './components/textarea-simple/textarea-simple.component';
import { HttpClientModule }   from '@angular/common/http';
import { CaptchaSimpleComponent } from './components/captcha-simple/captcha-simple.component';
import { InputboxTelephoneComponent } from './components/inputbox-telephone/inputbox-telephone.component';


@NgModule({
  declarations: [
    AppComponent,
    InputboxSimpleComponent,
    ComboboxSimpleComponent,
    TextareaSimpleComponent,
    CaptchaSimpleComponent,
    InputboxTelephoneComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
