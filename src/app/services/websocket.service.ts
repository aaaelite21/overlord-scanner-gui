import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;
  wsUrl: String = `ws://localhost:3004`;
  constructor() {
    this.socket = io(this.wsUrl);
  }

  listen(eventName: String) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName, data) {
    this.socket.emit(eventName, data);
  }
}
