import { TinyColor } from '@ctrl/tinycolor'
import { type Declaration } from 'postcss'
import { AbstractAntToTw } from './AbstractAntToTw'

export class ControlHeight extends AbstractAntToTw {
  constructor() {
    super('height')
  }
  isMatch(prop: string) {
    return prop.startsWith('control') && prop.includes('height')
  }
}

export class ControlColors extends AbstractAntToTw {
  constructor() {
    super('colors')
  }
  isMatch(prop: string, decl: Declaration) {
    return prop.startsWith('control') && new TinyColor(decl.value).isValid
  }
}

export class ControlPadding extends AbstractAntToTw {
  constructor() {
    super('padding')
  }
  isMatch(prop: string) {
    return prop.startsWith('control') && prop.includes('padding')
  }
}

export class ControlOutlineWidth extends AbstractAntToTw {
  constructor() {
    super('outlineWidth')
  }
  isMatch(prop: string) {
    return prop.startsWith('control') && prop.includes('outline')
  }
}
