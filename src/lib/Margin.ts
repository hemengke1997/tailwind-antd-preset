import { AbstractAntToTw } from './AbstractAntToTw'

export class Margin extends AbstractAntToTw {
  constructor() {
    super('margin')
  }

  isMatch(prop: string) {
    return prop.startsWith('margin')
  }
}
