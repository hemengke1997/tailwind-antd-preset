import { AbstractAntToTw } from './AbstractAntToTw'

export class LinkDecoration extends AbstractAntToTw {
  constructor() {
    super('LinkDecoration')
  }

  isMatch(prop: string) {
    return /link.*decoration/.test(prop)
  }
}
