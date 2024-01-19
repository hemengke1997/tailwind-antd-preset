import { AbstractAntToTw } from './AbstractAntToTw'

export class FontFamily extends AbstractAntToTw {
  constructor() {
    super('fontFamily')
  }

  isMatch(prop: string) {
    return prop.startsWith('font-family')
  }
}
