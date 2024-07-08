import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private readonly API_ENDPOINT = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  start() {
    return this.http.post(this.API_ENDPOINT + 'start', null)
  }

  stop() {
    this.http.post(this.API_ENDPOINT + 'stop', null).subscribe()
  }

  sleep() {
    this.http.post(this.API_ENDPOINT + 'sleep', null).subscribe()
  }

  turbo() {
    this.http.post(this.API_ENDPOINT + 'turbo', null).subscribe()
  }

  mode_a() {
    this.http.post(this.API_ENDPOINT + 'mode_a', null).subscribe()
  }

  mode_p() {
    this.http.post(this.API_ENDPOINT + 'mode_p', null).subscribe()
  }
}
