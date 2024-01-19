import { AbstractAntToTw } from './AbstractAntToTw'

export class BorderRadius extends AbstractAntToTw {
  constructor() {
    super('borderRadius')
  }

  isMatch(prop: string) {
    return prop.startsWith('border-radius')
  }
}
