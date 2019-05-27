const colors = {
  text: "#212529",
  background: "#fff",
  primary: "#00f",
  secondary: "#00a",
  gray: "#eee",
  darkGray: "#55595c",
  lightgray: "#fafafa",
  primaryBtn: "#007bff",
  secondaryBtn: "#6c757d",
  modes: {
    dark: {
      text: "#fff",
      background: "#000",
      primary: "#0cf",
      secondary: "#f0e",
      gray: "#222",
      lightgray: "#111"
    }
  }
}

export default {
  colors,
  fonts: {
    body: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  breakpoints: [600, 900, 1200, 1800],
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  lineHeights: {
    body: 1.75,
    heading: 1.25
  },
  buttons: {
    primary: {
      backgroundColor: colors.primaryBtn,
      borderColor: colors.primaryBtn,
      color: "#fff",
      padding: ".375rem .75rem",
      lineHeight: 1.5,
      borderRadius: ".25rem"
    },
    secondary: {
      backgroundColor: colors.secondaryBtn,
      borderColor: colors.secondaryBtn,
      color: "#fff",
      padding: ".375rem .75rem",
      lineHeight: 1.5,
      borderRadius: ".25rem"
    }
  },
  textStyles: {
    italics: {
      fontStyle: "italic"
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2px"
    }
  }
}
