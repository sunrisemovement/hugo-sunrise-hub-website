import ready from 'domready'
import Event, { Options } from './Events/Event'
import Events from './Events/index'
import TwitterTimeline from '../Components/TwitterTimeline'

/**
 * This just makes sure typescript includes them in the bundle
 */
const dependencies = [
  Events,
  TwitterTimeline,
]

ready(() => {
  const element = document.querySelector('sunrise-events')! as Events
  if (element instanceof Events) {
    element.events = window._data.events.map((e: any) => new Event(e))
    element.hubName = window._data.hubName
  }
})
