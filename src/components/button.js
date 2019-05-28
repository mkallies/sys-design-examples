import styled, { css } from "styled-components"
import {
  fontWeight,
  buttonStyle,
  fontSize,
  letterSpacing,
  lineHeight
} from "styled-system"
import { Box } from "./box"

const buttonColorVariants = ({ variant, theme }) => {
  if (!variant) return

  if (variant === "primary") {
    return {
      backgroundColor: theme.colors.primaryBtn
    }
  }

  if (variant === "secondary") {
    return {
      backgroundColor: theme.colors.secondaryBtn
    }
  }

  if (variant === "minimal") {
    return css`
      border: 1px solid ${theme.colors.minimalBtn};
      color: ${theme.colors.minimalBtn};
      background: transparent;
      padding: .6rem 1rem;
      &:hover {
        color: ${theme.colors.gray};
        background: ${theme.colors.minimalBtn}
    `
  }
}

export const Button = styled(Box)`
  border: 1px solid transparent;
  border-radius: 0.25rem;

  appearance: none;
  display: inline-block;
  text-align:  center;
  text-decoration:  none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  
  ${buttonColorVariants}
  ${buttonStyle}
  ${fontWeight}
  ${fontSize}
  ${letterSpacing}
  ${lineHeight}
`

Button.defaultProps = {
  as: "button"
}
