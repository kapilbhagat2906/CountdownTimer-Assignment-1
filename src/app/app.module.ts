import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { TimerComponent } from './components/countdown-timer/timer/timer.component';
import { ControlsComponent } from './components/countdown-timer/controls/controls.component';
import { StatusComponent } from './components/countdown-timer/status/status.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    TimerComponent,
    ControlsComponent,
    StatusComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule //  for animation on timer (background animates based on timer state)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
