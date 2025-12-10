import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private readonly API_ENDPOINT = environment.apiEndpoint;

  constructor(private readonly http: HttpClient) {
  }

  start() {
    return this.http.post(this.API_ENDPOINT + 'start', null);
  }

  stop() {
    return this.http.post(this.API_ENDPOINT + 'stop', null);
  }

  sleep() {
    return this.http.post(this.API_ENDPOINT + 'sleep', null);
  }

  turbo() {
    return this.http.post(this.API_ENDPOINT + 'turbo', null);
  }

  modeA() {
    return this.http.post(this.API_ENDPOINT + 'mode_a', null);
  }

  modeP() {
    return this.http.post(this.API_ENDPOINT + 'mode_p', null);
  }
}
