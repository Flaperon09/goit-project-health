import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
body {
  margin: 0;
  background-color: #E7F2FF;
  font-family: Verdana, Geneva, Tahoma, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

p, ul, section, h1, h2, h3 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
}
`;