import { AbstractAntToTw } from './AbstractAntToTw'

export class BoxShadow extends AbstractAntToTw {
  constructor() {
    super('boxShadow')
  }

  isMatch(prop: string) {
    return prop.startsWith('box-shadow')
  }
}
