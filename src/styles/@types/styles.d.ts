import "styled-components";
import theme from "../theme";

export type CustomTheme = typeof theme;
export type CustomThemeKeys = keyof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
