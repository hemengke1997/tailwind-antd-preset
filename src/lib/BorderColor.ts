import { TinyColor } from '@ctrl/tinycolor'
import { type Declaration } from 'postcss'
import { AbstractAntToTw } from './AbstractAntToTw'

export class BorderColor extends AbstractAntToTw {
  constructor() {
    super('borderColor')
  }

  isMatch(prop: string, decl: Declaration) {
    return prop.includes('border') && new TinyColor(decl.value).isValid
  }
}
