export interface Theme {
  [key: string]: string
}

interface ThemeList {
  defaultTheme: Theme
  darkTheme: Theme
}

export const themeList:ThemeList = {
  defaultTheme: {
    "--primary-color": "#4e97fc",
    "--green-color": "#6bc77e",
    "--danger-color": "#ff3030",
    "--yellow-color": "#fdb300",
    "--text-primary": "#000000", 
    "--text-secondary": "#696969",
    "--background": "#ffffff",
    "--card": "#f7f7f7",
    "--border": "#f5f5f5",
  },
  darkTheme: {
    "--primary-color": "#4e97fc",
    "--green-color": "#6bc77e",
    "--danger-color": "#ff3030",
    "--yellow-color": "#FDB300",
    "--text-primary": "#f5f5f5", 
    "--text-secondary": "#b5b5b5",
    "--background": "#333333",
    "--card": "#434343",
    "--border": "#c4c4c4",
  }
}