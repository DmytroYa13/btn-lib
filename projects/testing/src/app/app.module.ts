import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CstButtonModule } from 'button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CstButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
