import { Injectable } from '@angular/core';
import { BookingQuery } from '../models/booking-query';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private data: BookingQuery | undefined;

  setData(data: BookingQuery) {
    this.data = data;
  }

  getData(): BookingQuery {
    return <BookingQuery>this.data;
  }
}
