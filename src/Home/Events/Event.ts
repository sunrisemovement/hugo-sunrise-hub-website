import { CivilDateTime, ZonedDateTime, OffsetDateTime, Instant } from '../../Temporal'

const MILLIS_IN_A_DAY = 1000 * 60 * 60 * 24

export type Options = {
  url: string,
  title: string,
  start: string,
  description: string,
  place: string,
  address: string,
  coordinates: {
    latitude: number,
    longitude: number,
  },
}

export default class Event {
  public readonly title: string
  public readonly start: CivilDateTime
  public readonly place: string
  public readonly address: string
  public readonly url: string
  public readonly coordinate: { latitude: number, longitude: number }
  public readonly description: string

  constructor({
    description,
    title,
    url,
    address,
    place,
    start,
    coordinates,
  }: Options) {    
    this.title = title
    this.place = place
    this.address = address
    this.coordinate = coordinates
    this.url = url
    this.description = description
    this.start = Instant.fromString(start).withOffset('+00:00').getCivilDateTime()
  }
}