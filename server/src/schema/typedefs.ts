import { gql } from "apollo-server-express";

const typeDefs = gql`
  type BookingData {
    bookingCode: String!
    passengers: Passengers!
    itinerary: Itinerary!
    contactDetails: [ContactDetails!]!
  }

  type Itinerary {
    type: String!
    connections: [Connections!]!
  }

  type ContactDetails {
    class: String!
    address: String!
  }

  type MarketingFlight {
    number: String!
    operatingFlight: OperatingFlight!
    status: Status!
    carrier: Carrier!
  }

  type OperatingFlight {
    number: String!
    checkInStart: String!
    localCheckInStart: String!
    scheduledArrival: String!
    localScheduledDeparture: String!
    equipment: Equipment!
    cabin: Cabin!
    arrivalTerminal: ArrivalTerminal!
    carrier: Carrier!
  }

  type Status {
    code: String!
  }
  type Equipment {
    code: String!
  }
  type Cabin {
    code: String!
    name: String!
  }
  type ArrivalTerminal {
    name: String!
  }
  type Carrier {
    code: String!
    name: String!
  }
  type Segments {
    id: Int!
    marketingFlight: MarketingFlight!
  }

  type Country {
    code: String!
    name: String!
  }
  type City {
    IATACode: String!
    name: String!
    country: Country!
  }
  type Location {
    IATACode: String!
    name: String!
    city: City!
  }

  type Connections {
    id: Int!
    segments: [Segments!]!
    destination: Location!
    origin: Location!
  }

  type Passengers {
    id: Int!
    firstName: String!
    lastName: String!
    title: Title!
  }

  type Title {
    code: String!
    name: String!
  }
  
  # Queries
  type Query {
    getCheckinDetails: BookingData!
  }
`;

module.exports = typeDefs;
