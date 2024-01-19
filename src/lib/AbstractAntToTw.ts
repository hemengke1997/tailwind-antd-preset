import { type Declaration } from 'postcss'
import { type ThemeConfig } from 'tailwindcss/types/config'

type CustomThemeKey = 'control' | 'fontHeight' | 'LinkDecoration'
type MaybeArray<T> = T | T[]

export abstract class AbstractAntToTw {
  private cache: Map<string, string> = new Map<string, string>()

  constructor(private twThemeKey: MaybeArray<keyof ThemeConfig | CustomThemeKey>) {}

  public setTwProps(decl: Declaration) {
    if (this.isVariableDeclaration(decl) && this.isMatch(this.extractProp(decl), decl)) {
      let prop = decl.prop.replace('--', '')

      prop = this.beforeSet(prop)

      const value = `var(${decl.prop})`
      this.cache.set(prop, value)
      return true
    } else {
      return false
    }
  }

  public getTwProps() {
    const twThemeKey = this.twThemeKey
    const twProps = Array.isArray(twThemeKey) ? twThemeKey : [twThemeKey]

    return twProps.map((prop) => {
      return {
        [prop]: this.cache,
      }
    })
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
