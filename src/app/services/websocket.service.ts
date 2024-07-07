import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {BehaviorSubject, Observable} from 'rxjs';
import {defaultStatusModel, StatusModel} from '../models/status.model';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;
  private readonly WS_ENDPOINT = environment.wsEndpoint;
  private readonly API_ENDPOINT = environment.apiEndpoint;
  private statusSubject$: BehaviorSubject<StatusModel> = new BehaviorSubject<StatusModel>(defaultStatusModel);
  public status$: Observable<StatusModel> = this.statusSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.getInitialData();
    this.connect();
  }

  disconnect() {
    if (this.socket$) {
      this.socket$.complete();
    }
  }

  getStatus(): Observable<StatusModel> {
    return this.status$;
  }

  private getInitialData() {
    this.http.get<any>(this.API_ENDPOINT + 'status').subscribe(
      {
        next: msg => this.onMessage(msg),
        error: err => console.error('Fetch status error', err)
      }
    )
  }

  private connect() {
    this.socket$ = webSocket(this.WS_ENDPOINT);

    this.socket$.subscribe({
      next: msg => this.onMessage(msg),
      error: err => console.error('WebSocket error', err),
      complete: () => console.log('WebSocket connection closed')
    });
  }

  private onMessage(msg: StatusModel) {
    this.statusSubject$.next(msg);
  }
}
