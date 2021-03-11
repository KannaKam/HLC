import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Event, Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  createEvent(event: Event): Promise<Response> {
    return new Promise<Response>(resolve => {
      this.httpClient.post<Response>(environment.url + "event/create", event).subscribe(resp => resolve(resp))
    })
  }

  findEvents(): Promise<Response> {
    return new Promise<Response>(resolve => {
      this.httpClient.get<Response>(environment.url + "event/find").subscribe(resp => resolve(resp))
    })
  }

  updateEvents(event: Event): Promise<Response> {
    return new Promise<Response>(resolve => {
      this.httpClient.post<Response>(environment.url + "event/update", event).subscribe(resp => resolve(resp))
    })
  }

  deleteEvents(event: Event): Promise<Response> {
    return new Promise<Response>(resolve => {
      this.httpClient.post<Response>(environment.url + "event/delete", event).subscribe(resp => resolve(resp))
    })
  }

}