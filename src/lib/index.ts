import { BorderColor } from './BorderColor'
import { BorderWidth } from './BorderWidth'
import { BoxShadow } from './BoxShadow'
import { Color } from './Color'
import { ControlColors, ControlHeight, ControlOutlineWidth, ControlPadding } from './Control'
import { FontFamily } from './FontFamily'
import { FontHeight } from './FontHeight'
import { FontSize } from './FontSize'
import { FontWeight } from './FontWeight'
import { Leading } from './Leading'
import { Margin } from './Margin'
import { Padding } from './Padding'
import { Round } from './Round'
import { SpaceBetween } from './SpaceBetween'
import { TransitionDuration } from './TransitionDuration'
import { TransitionTimingFunction } from './TransitionTimingFunction'

export const antToTw = [
  new BorderColor(),
  new BorderWidth(),
  new BoxShadow(),
  new ControlColors(),
  new ControlHeight(),
  new ControlOutlineWidth(),
  new ControlPadding(),
  new FontFamily(),
  new FontSize(),
  new FontWeight(),
  new FontHeight(),
  new Leading(),
  new Margin(),
  new Padding(),
  new Round(),
  new SpaceBetween(),
  new TransitionDuration(),
  new TransitionTimingFunction(),
  new Color(),
]
