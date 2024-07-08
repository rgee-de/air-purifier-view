import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {CommonModule} from '@angular/common';
import {CardInformationComponent} from "./components/card-information/card-information.component";
import {CardButtonComponent} from "./components/card-button/card-button.component";
import {WebsocketService} from "./services/websocket.service";
import {ExtractStatusPipe} from './pipes/extract-status.pipe';
import {StatusModel} from "./models/status.model";
import {CommandService} from "./services/command.service";
import {TimeGapPipe} from "./pipes/time-gap.pipe";
import {Store} from "@ngrx/store";
import {start} from "./store/air-purifier-control.action";
import {
  selectIsAllergeneMode,
  selectIsGeneralMode,
  selectIsOff,
  selectIsOn,
  selectIsSleepMode,
  selectIsTurboMode,
  selectPM25
} from "./store/air-purifier-status.selector";
import {selectIsLoadingStart} from "./store/air-purifier-control.selector";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardInformationComponent, RouterOutlet, ButtonModule, CardModule, ProgressSpinnerModule, ProgressBarModule, CommonModule, CardButtonComponent, ExtractStatusPipe, TimeGapPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pm25$!: Observable<number>
  iaql$!: Observable<number>
  fltsts0$!: Observable<number>
  fltsts1$!: Observable<number>
  fltsts2$!: Observable<number>
  timestamp$!: Observable<string>
  isTurboMode$!: Observable<boolean>
  isSleepMode$!: Observable<boolean>
  isGeneralMode$!: Observable<boolean>
  isAllergeneMode$!: Observable<boolean>
  isOff$!: Observable<boolean>
  isOn$!: Observable<boolean>
  isStartLoading!: Observable<boolean>

  constructor(
    private http: HttpClient,
    private websocketService: WebsocketService,
    private commandService: CommandService,
    private store: Store
  ) {
    this.initVariables();
  }

  private initVariables() {
    this.isTurboMode$ = this.store.select(selectIsTurboMode);
    this.isSleepMode$ = this.store.select(selectIsSleepMode);
    this.isGeneralMode$ = this.store.select(selectIsGeneralMode);
    this.isAllergeneMode$ = this.store.select(selectIsAllergeneMode);
    this.isOn$ = this.store.select(selectIsOn);
    this.isOff$ = this.store.select(selectIsOff);
    this.isStartLoading = this.store.select(selectIsLoadingStart);

    this.pm25$ = this.store.select(selectPM25);
    this.iaql$ = this.createStatusObservable('iaql');
    this.fltsts0$ = this.createStatusObservable('fltsts0');
    this.fltsts1$ = this.createStatusObservable('fltsts1');
    this.fltsts2$ = this.createStatusObservable('fltsts2');
    this.timestamp$ = this.createStatusObservable('timestamp');
  }

  private createStatusObservable(key: keyof StatusModel): Observable<any> {
    return this.websocketService.getStatus().pipe(
      map((status: StatusModel) => {
        return status ? status[key] : 0;
      })
    );
  }



  // Trigger methods for each action
  triggerSleep() {
    this.commandService.sleep();
  }

  triggerTurbo() {
    this.commandService.turbo();
  }

  triggerModeA() {
    this.commandService.mode_a();
  }

  triggerModeP() {
    this.commandService.mode_p();
  }

  triggerStart() {
    this.store.dispatch(start())
  }

  triggerStop() {
    this.commandService.stop();
  }
}
