import { AbstractAntToTw } from './AbstractAntToTw'

export class Leading extends AbstractAntToTw {
  constructor() {
    super('lineHeight')
  }

  isMatch(prop: string) {
    return prop.startsWith('line-height')
  }
}
