import { type Declaration } from 'postcss'
import { type ThemeConfig } from 'tailwindcss/types/config'

export abstract class AbstractAntToTw {
  private cache: Record<string, string> = {}

  constructor(public twThemeKey: keyof ThemeConfig) {}

  public setTwProps(decl: Declaration) {
    if (this.isVariableDeclaration(decl) && this.isMatch(this.extractProp(decl), decl)) {
      let prop = decl.prop.replace('--', '')

      prop = this.beforeSet(prop)

      const value = `var(${decl.prop})`
      this.cache[prop] = value
      return true
    } else {
      return false
    }
  }

  public getTwProps() {
    return {
      [this.twThemeKey]: this.cache,
    }
  }

  public beforeSet(prop: string) {
    return prop
  }

  private isVariableDeclaration(decl: Declaration) {
    return Boolean(decl.value) && decl.prop.startsWith('--')
  }

  private extractProp(decl: Declaration) {
    return decl.prop.replace(/^-{2}\w+-(?=.*)/, '')
  }

  abstract isMatch(prop: string, decl: Declaration): boolean
}
