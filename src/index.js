import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';

import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }> {/* Оболочка темизации */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
