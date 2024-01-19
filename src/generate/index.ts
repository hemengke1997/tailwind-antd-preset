import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { type Declaration, type Rule } from 'postcss'
import { antToTw } from '../lib'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function readAntdCss() {
  const cssFile = path.resolve(__dirname, './antd.css')
  const css = fs.readFileSync(cssFile, 'utf-8')
  return css
}

async function parseCss(css: string) {
  const { default: postcss } = await import('postcss')
  const root = postcss.parse(css)
  root.walkRules((rule) => {
    if (isOutsideRoot(rule)) {
      return
    }

    rule.each((decl) => {
      antToTw.forEach((converter) => {
        return converter.setTwProps(decl as Declaration)
      })
    })
  })

  const theme: {
    [twProp: string]: {
      [antCssProp in string]: string
    }
  } = {}

  antToTw.forEach((converter) => {
    const key = converter.twThemeKey
    theme[key] = {
      ...theme[key],
      ...converter.getTwProps()[key],
    }
  })
  return theme
}

type UnPromise<T> = T extends Promise<infer U> ? U : T

async function writeTwToTs(theme: UnPromise<ReturnType<typeof parseCss>>) {
  const content = `export default ${JSON.stringify(theme)}`

  const out = path.resolve(__dirname, './theme.ts')

  fs.writeFileSync(out, content)

  spawn('eslint', [out, '--fix'])
}

function isOutsideRoot(rule: Rule) {
  return rule.selectors.length !== 1 || rule.selectors[0] !== ':root' || rule.parent?.type !== 'root'
}

async function antdToTw() {
  const css = readAntdCss()

  if (css) {
    const parsedCss = await parseCss(css)
    await writeTwToTs(parsedCss)
  } else {
    console.error('antd.css not found')
  }
}

antdToTw()
