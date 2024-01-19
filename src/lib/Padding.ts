import { AbstractAntToTw } from './AbstractAntToTw'

export class Padding extends AbstractAntToTw {
  constructor() {
    super('padding')
  }

  isMatch(prop: string) {
    return prop.startsWith('padding')
  }
}
