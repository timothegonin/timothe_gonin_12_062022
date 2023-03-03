import { createGlobalStyle } from 'styled-components'

/**
 * Global styles properties, used for general layout and typography
 * @constant GlobalStyle
 */

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@400&display=swap');

* {
  font-family: Roboto, sans-serif;
}
  *,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.App {
  min-height: 100vh;
  height: 100vh;
}
`

export default GlobalStyle
