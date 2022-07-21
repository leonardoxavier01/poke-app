import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: ${({ theme }) => theme.backgroundGradient}; 
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

#root {
  height: 100vh;
  width: 100vw;
}

@media (max-width: 630px) {
    html {
        font-size: 70%;
    }
}
`
