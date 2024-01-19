import { AbstractAntToTw } from './AbstractAntToTw'

export class Round extends AbstractAntToTw {
  constructor() {
    super('borderRadius')
  }
  isMatch(prop: string) {
    return prop.startsWith('border-radius')
  }
}
