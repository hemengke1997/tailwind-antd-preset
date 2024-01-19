import { AbstractAntToTw } from './AbstractAntToTw'

export class BorderWidth extends AbstractAntToTw {
  constructor() {
    super('borderWidth')
  }

  isMatch(prop: string) {
    return prop.startsWith('line-width')
  }
}
