export const theme = {
  colors: {
    main: '#5652CC',
    mainDark: '#33317a',
    text: '#333333',
    textAlt: '#A3A9D0',
    warning: '#FC780B',
    bg: '#efefef',
    bgAlt: '#a3a9d0',
  },
  fontSizes: {
    xSmall: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    xLarge: '20px',
    xxLarge: '28px',
    xxxLarge: '150px',
  }
} as const

export type Theme = typeof theme
