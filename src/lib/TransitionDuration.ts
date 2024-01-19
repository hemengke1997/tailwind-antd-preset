import { AbstractAntToTw } from './AbstractAntToTw'

export class TransitionDuration extends AbstractAntToTw {
  constructor() {
    super('transitionDuration')
  }

  isMatch(prop: string) {
    return prop.startsWith('motion-duration')
  }
}
