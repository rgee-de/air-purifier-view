import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import {CardInformationComponent} from "./components/card-information/card-information.component";
import {CardButtonComponent} from "./components/card-button/card-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardInformationComponent, RouterOutlet, ButtonModule, HttpClientModule, CardModule, ProgressSpinnerModule, ProgressBarModule, CommonModule, CardButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = 'http://192.168.20.47:8000/';
  loadingStates = {
    sleep: false,
    turbo: false,
    modeA: false,
    modeP: false,
    start: false,
    stop: false
  };
  pm25: number = 0;
  iaql: number = 0;
  fltsts0: number = 0;
  fltsts1: number = 0;
  fltsts2: number = 0;


  constructor(private http: HttpClient) {
    this.fetchStatus();
  }

  // Generic method to make POST requests
  private postRequest(endpoint: string): Observable<any> {
    const body = {};
    return this.http.post(this.apiUrl + endpoint, body);
  }

  // Trigger methods for each action
  triggerSleep() {
    this.makeApiCall("sleep", 'sleep');
  }

  triggerTurbo() {
    this.makeApiCall("turbo", 'turbo');
  }

  triggerModeA() {
    this.makeApiCall("mode_a", 'modeA');
  }

  triggerModeP() {
    this.makeApiCall("mode_p", 'modeP');
  }

  triggerStart() {
    this.makeApiCall("start", 'start');
  }

  triggerStop() {
    this.makeApiCall("stop", 'stop');
  }

  // Helper method to handle API call and response
  private makeApiCall(endpoint: string, stateKey: keyof typeof this.loadingStates) {
    this.loadingStates[stateKey] = true;
    this.postRequest(endpoint).subscribe(
      response => {
        console.log(`POST request to ${endpoint} successful`, response);
        this.loadingStates[stateKey] = false;
      },
      error => {
        console.error(`POST request to ${endpoint} error`, error);
        this.loadingStates[stateKey] = false;
      }
    );
  }

  // Fetch status every 5 seconds
  private fetchStatus() {
    interval(5000)
      .pipe(switchMap(() => this.http.get<any>(this.apiUrl + 'status')))
      .subscribe(
        response => {
          debugger;
          this.pm25 = response.pm25;
          this.iaql = response.iaql;
          this.fltsts0 = response.fltsts0;
          this.fltsts1 = response.fltsts1;
          this.fltsts2 = response.fltsts2;
        },
        error => {
          console.error('GET request to /status error', error);
        }
      );
  }
}
