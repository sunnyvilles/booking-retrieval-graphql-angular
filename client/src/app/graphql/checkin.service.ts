import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BookingQuery } from '../models/booking-query';

const CHECKIN_DETAILS = gql`
  query {
    getCheckinDetails {
      bookingCode
      passengers {
        firstName
        lastName
      }
      itinerary {
        connections {
          origin {
            city {
              name
            }
          }
          destination {
            city {
              name
            }
          }
          segments {
            marketingFlight {
              carrier {
                name
              }
              operatingFlight {
                cabin {
                  code
                  name
                }
                localScheduledDeparture
              }
            }
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CheckinService {
  constructor(private apolloClient: Apollo) {}

  // get checkin details

  public getCheckinDetails(bookingQuery: BookingQuery | undefined) {
    return this.apolloClient.watchQuery<any>({
      query: CHECKIN_DETAILS,
    });
  }
}
