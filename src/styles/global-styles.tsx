import {
  createGlobalStyle,
  GlobalStyleComponent,
  css,
} from "styled-components";

const GlobalStyles: GlobalStyleComponent<
  { theme: Theme },
  {}
> = createGlobalStyle`
${({ theme }) =>
  css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      border: 0;
      margin: 0;
      padding: 0;
    }

    html,
    body {
      background: ${theme.backgroundColor};
      font-size: ${theme.fontSize};
      font-family: ${theme.fontFamily}, sans-serif;
      color: ${theme.onBackgroundVariantColor};
      line-height: 1.15;
      text-size-adjust: 100%;
      height: 100%;
      margin: 0;
    }

    p {
      font-size: ${theme.fontSize};
    }

    #root {
      height: 100%;
      position: relative;
    }

    textarea {
      resize: none;
      width: 100%;
    }

    img {
      display: block;
    }
  `}`;

export default GlobalStyles;
