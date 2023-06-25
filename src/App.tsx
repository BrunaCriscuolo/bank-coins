import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
