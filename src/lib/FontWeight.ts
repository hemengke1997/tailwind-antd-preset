import { AbstractAntToTw } from './AbstractAntToTw'

export class FontWeight extends AbstractAntToTw {
  constructor() {
    super('fontWeight')
  }

  isMatch(prop: string) {
    return prop.startsWith('font-weight')
  }
}
