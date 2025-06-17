import { BrowserRouter } from 'react-router';
import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
