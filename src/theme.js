const baseColors = {
  text: "#212529",
  background: "#fff",
  primary: "#f8f9fa",
  secondary: "#00a",
  gray: "#eee",
  darkGray: "#55595c",
  lightgray: "#fafafa",
  primaryBtn: "#007bff",
  secondaryBtn: "#6c757d",
  minimalBtn: "#6c757d"
}

const colors = {
  ...baseColors,
  modes: {
    dark: {
      text: "#fff",
      background: "#222",
      primary: "#2e3030",
      secondary: "#f0e",
      gray: "#222",
      lightgray: "#111",
      primaryBtn: "#375a7f",
      secondaryBtn: "#444",
      minimalBtn: "#fff"
    },
    light: baseColors
  }
}

export default {
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(n => `${n / 10}rem`),
  fonts: {
    body: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  breakpoints: [600, 900, 1200, 1800],
  fontSizes: [1.2, 1.4, 1.6, 1.8, 2.4, 3.2, 4.8, 6.4, 7.2].map(n => `${n}rem`),
  lineHeights: [1, 1.25, 1.5, 1.75, 2],
  fontWeights: [300, 400, 500, 600],
  buttons: {
    primary: {
      color: "#fff",
      padding: "6px 10px",
      lineHeight: 1.5,
      borderRadius: ".5rem",
      fontWeight: 300
    },
    secondary: {
      color: "#fff",
      padding: "6px 10px",
      lineHeight: 1.5,
      borderRadius: ".5rem",
      fontWeight: 300
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
