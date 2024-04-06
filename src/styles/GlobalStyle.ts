import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    body {
        font-family: 'IBM Plex Mono', sans-serif;
        background-color: ${({ theme }) => theme.colors.background.primary};
    }
`;

export default GlobalStyle;
