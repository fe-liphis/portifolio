import { ThemeProvider } from "styled-components";
import ResetCSS from "./ResetCSS";
import GlobalStyle from "./GlobalStyle";
import { PropsWithChildren } from "react";
import theme from "./theme";

function MyThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;
