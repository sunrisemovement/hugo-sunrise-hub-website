import { Options } from './Home/Events/Event'

declare global {
  interface HugoData {
    events: Array<Options>,
    hubName: string,
    serviceWorkerUrl: string,
    basePath: string,
  }

  interface Window {
    _data: HugoData
  }
}