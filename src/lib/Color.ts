import { TinyColor } from '@ctrl/tinycolor'
import { type Declaration } from 'postcss'
import { AbstractAntToTw } from './AbstractAntToTw'

export class Color extends AbstractAntToTw {
  constructor() {
    super('colors')
  }

  isMatch(prop: string, decl: Declaration) {
    return prop.startsWith('color') && new TinyColor(decl.value).isValid
  }
}
