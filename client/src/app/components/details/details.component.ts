import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { BookingQuery } from '../../models/booking-query';
import { BookingData, Connection, Segment } from '../../models/booking-data';
import { Subscription } from 'rxjs';
import { CheckinService } from '../../graphql/checkin.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  bookingQuery: BookingQuery | undefined;
  loading: boolean | undefined;
  bookingData: BookingData | undefined;
  querySubscription: Subscription | undefined;
  connection: Connection | undefined;
  segment: Segment | undefined;

  constructor(
    private message: MessageService,
    private service: CheckinService
  ) {}

  ngOnInit(): void {
    this.bookingQuery = this.message.getData();
    this.getCheckinDetails();
  }

  getCheckinDetails() {
    this.querySubscription = this.service
      .getCheckinDetails(this.bookingQuery)
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.bookingData = data.getCheckinDetails;
        this.connection = this.bookingData?.itinerary?.connections[0];
        this.segment = this.connection?.segments[0];
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
