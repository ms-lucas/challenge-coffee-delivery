import { BrowserRouter } from 'react-router';
import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from './contexts/CartContext/CartContextProvider';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
