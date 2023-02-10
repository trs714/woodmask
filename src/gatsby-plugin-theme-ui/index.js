const white = `#fff`
const mutedWhite = `#f7f7f7`
const whiteGray = `#efefef`

const ghostWhite = `#f6f6ff`
const mutedGhostWhite = `#eeeef7`
const ghostGray = `#e6e6ef`

const snuff = `#dfd7eb`
const mutedSnuff = `#d7cfe4`
const snuffGray = `#cfc7db`
const astronaut = `#284279`

const pine = `#042204`
const mutedPine = `#0c2a0c`
const pineGray = `#143214`

const woodSmoke = `#161617`
const mutedWoodSmoke = `#1e1e1f`
const woodSmokeGray = `#262627`

const black = `#000`
const mutedBlack = `#080808`
const blackGray = `#101010`

const theme = {
  colors: {
    text: black,
    background: white,
    highlight: whiteGray,
    muted: mutedWhite,
    modes: {
      ghost: {
        text: black,
        background: ghostWhite,
        highlight: ghostGray,
        muted: mutedGhostWhite
      },
      snuff: {
        text: astronaut,
        background: snuff,
        highlight: snuffGray,
        muted: mutedSnuff
      },
      pine: {
        text: white,
        background: pine,
        highlight: pineGray,
        muted: mutedPine
      },
      smoke: {
        text: white,
        background: woodSmoke,
        highlight: woodSmokeGray,
        muted: mutedWoodSmoke
      },
      abyss: {
        text: white,
        background: black,
        highlight: blackGray,
        muted: mutedBlack
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Inter, sans-serif",
    monospace: "Menlo, monospace",
  },
}

export default theme;