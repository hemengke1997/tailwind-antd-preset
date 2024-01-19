import { AbstractAntToTw } from './AbstractAntToTw'

export class FontSize extends AbstractAntToTw {
  constructor() {
    super('fontSize')
  }

  isMatch(prop: string) {
    return prop.startsWith('font-size')
  }
}
