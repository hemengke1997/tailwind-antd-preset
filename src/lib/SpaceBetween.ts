import { AbstractAntToTw } from './AbstractAntToTw'
import { Margin } from './Margin'

export class SpaceBetween extends AbstractAntToTw {
  constructor() {
    super('space')
  }

  isMatch(prop: string) {
    return new Margin().isMatch(prop)
  }

  beforeSet(prop: string) {
    return prop.replace('margin', 'space')
  }
}
