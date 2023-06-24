import "./App.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Teste</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
