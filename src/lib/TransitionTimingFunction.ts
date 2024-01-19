import { AbstractAntToTw } from './AbstractAntToTw'

export class TransitionTimingFunction extends AbstractAntToTw {
  constructor() {
    super('transitionTimingFunction')
  }

  isMatch(prop: string) {
    return prop.startsWith('motion-ease')
  }
}
