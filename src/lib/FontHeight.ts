import { AbstractAntToTw } from './AbstractAntToTw'

export class FontHeight extends AbstractAntToTw {
  constructor() {
    super('height')
  }

  isMatch(prop: string) {
    return prop.startsWith('font-height')
  }
}
