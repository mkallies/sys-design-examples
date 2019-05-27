import styled from "styled-components"
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  fontSize,
  space,
  variant
} from "styled-system"
import { Box } from "./box"

const textStyles = variant({ key: "textStyles" })

export const Text = styled(Box)`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${fontSize}
  ${space}
  ${textStyles}
`

Text.defaultProps = {
  as: "p"
}
