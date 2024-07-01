import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private apiUrl = 'http://192.168.20.47:8000/sleep';

  constructor(private http: HttpClient) {}

  sleep(): Observable<any> {


    const body = {};

    return this.http.post(this.apiUrl, body);
  }

  triggerSleep() {
    this.sleep().subscribe(
      response => {
        console.log('POST request successful', response);
      },
      error => {
        console.error('POST request error', error);
      }
    );
  }
}
