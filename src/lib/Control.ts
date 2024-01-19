import { AbstractAntToTw } from './AbstractAntToTw'

export class Control extends AbstractAntToTw {
  constructor() {
    super('control')
  }
  isMatch(prop: string) {
    return prop.startsWith('control')
  }
}
