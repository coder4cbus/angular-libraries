import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardsModule } from '../../../cards/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CardsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
