import Events from './Events/index.js'
import Event from './Events/Event.js'

window.domready(() => {
  Events.register().then(() => {
    const element = document.querySelector('sunrise-events')
    element.hubName = window._data.hubName
    element.events = window._data.events.map(e => new Event(e))
  })
})