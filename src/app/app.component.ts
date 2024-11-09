import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {CommonModule} from '@angular/common';
import {CardInformationComponent} from "./components/card-information/card-information.component";
import {CardButtonComponent} from "./components/card-button/card-button.component";
import {WebsocketService} from "./services/websocket.service";
import {ExtractStatusPipe} from './pipes/extract-status.pipe';
import {TimeGapPipe} from "./pipes/time-gap.pipe";
import {Store} from "@ngrx/store";
import {modeA, modeP, sleep, start, stop, turbo} from "./store/air-purifier-control/air-purifier-control.action";
import {
  selectFltsts0,
  selectFltsts1,
  selectFltsts2,
  selectIaql,
  selectIsAllergeneMode,
  selectIsFunctionButtonDeactivated,
  selectIsGeneralMode,
  selectIsOff,
  selectIsOn,
  selectIsSleepMode,
  selectIsStartButtonDeactivated,
  selectIsStopButtonDeactivated,
  selectIsTurboMode,
  selectPm25,
  selectTimestamp
} from "./store/air-purifier-status/air-purifier-status.selector";
import {
  selectIsModeALoading,
  selectIsModePLoading,
  selectIsSleepLoading,
  selectIsStartLoading,
  selectIsStopLoading,
  selectIsTurboLoading
} from "./store/air-purifier-control/air-purifier-control.selector";
import {ChipModule} from "primeng/chip";
import {TagModule} from "primeng/tag";
import {
  CardInformationWarningComponent
} from "./components/card-information-warning/card-information-warning.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardInformationComponent, RouterOutlet, ButtonModule, CardModule, ProgressSpinnerModule, ProgressBarModule, CommonModule, CardButtonComponent, ExtractStatusPipe, TimeGapPipe, ChipModule, TagModule, CardInformationWarningComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Status Observables
  status$ = {
    isTurboMode: this.store.select(selectIsTurboMode),
    isSleepMode: this.store.select(selectIsSleepMode),
    isGeneralMode: this.store.select(selectIsGeneralMode),
    isAllergeneMode: this.store.select(selectIsAllergeneMode),
    isOn: this.store.select(selectIsOn),
    isOff: this.store.select(selectIsOff),
  };

  // Loading Observables
  loading$ = {
    isStartLoading: this.store.select(selectIsStartLoading),
    isStopLoading: this.store.select(selectIsStopLoading),
    isSleepLoading: this.store.select(selectIsSleepLoading),
    isTurboLoading: this.store.select(selectIsTurboLoading),
    isModeALoading: this.store.select(selectIsModeALoading),
    isModePLoading: this.store.select(selectIsModePLoading),
  };

  // Button Deactivation Observables
  buttonDeactivation$ = {
    isStartButtonDeactivated: this.store.select(selectIsStartButtonDeactivated),
    isStopButtonDeactivated: this.store.select(selectIsStopButtonDeactivated),
    isFunctionButtonDeactivated: this.store.select(selectIsFunctionButtonDeactivated),
  };

  // Sensor Observables
  sensorData$ = {
    pm25: this.store.select(selectPm25),
    iaql: this.store.select(selectIaql),
    fltsts0: this.store.select(selectFltsts0),
    fltsts1: this.store.select(selectFltsts1),
    fltsts2: this.store.select(selectFltsts2),
    timestamp: this.store.select(selectTimestamp),
  };

  constructor(
    private websocketService: WebsocketService,
    private store: Store
  ) {}

  triggerAction(action: 'sleep' | 'turbo' | 'modeA' | 'modeP' | 'start' | 'stop') {
    const actionMap = {
      sleep: sleep(),
      turbo: turbo(),
      modeA: modeA(),
      modeP: modeP(),
      start: start(),
      stop: stop()
    };
    this.store.dispatch(actionMap[action]);
  }
}
