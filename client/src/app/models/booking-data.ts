export interface BookingData {
  bookingCode: string;
  contactDetails: ContactDetail[];
  itinerary: Itinerary;
  passengers: Passengers;
}
interface Itinerary {
  type: string;
  connections: Connection[];
}

interface ContactDetail {
  class: string;
  address: string;
}

interface MarketingFlight {
  number: string;
  carrier: Carrier;
  status: Status;
  operatingFlight: OperatingFlight;
}

interface OperatingFlight {
  number: string;
  carrier: Carrier2;
  checkInStart: string;
  localCheckInStart: string;
  scheduledArrival: string;
  localScheduledDeparture: string;
  arrivalTerminal: ArrivalTerminal;
  cabin: Cabin;
  equipment: Equipment;
}

interface Country {
  code: string;
  name: string;
}

interface City {
  IATACode: string;
  name: string;
  country: Country;
}

interface Location {
  IATACode: string;
  name: string;
  city: City;
}

interface Carrier {
  code: string;
  name: string;
}

interface Status {
  code: string;
}

interface Carrier2 {
  name: string;
}

interface ArrivalTerminal {
  name: string;
}

interface Cabin {
  code: string;
  name: string;
}

interface Equipment {
  code: string;
}

export interface Segment {
  id: number;
  marketingFlight: MarketingFlight;
}

export interface Connection {
  id: number;
  origin: Location;
  destination: Location;
  segments: Segment[];
}

interface Title {
  code: string;
  name: string;
}

interface Passengers {
  id: number;
  firstName: string;
  lastName: string;
  title: Title;
}
