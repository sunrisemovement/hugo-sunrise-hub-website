import ready from 'domready'
import Event, { Options } from './Events/Event'
import Events from './Events/index'

declare global {
  interface Window {
    _data: {
      events: Array<Options>,
      hubName: string
    }
  }
}

ready(() => {
  const element = document.querySelector('sunrise-events')! as Events
  if (element instanceof Events) {
    element.events = window._data.events.map((e: any) => new Event(e))
    element.hubName = window._data.hubName
  }
})
