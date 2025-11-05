import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        font-family: "Poppins", sans-serif;
        background: #fafafa;
        color: #222;
        line-height: 1.5;
        scroll-behavior: smooth;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      section {
        padding: 80px 20px;
      }
    `}
  />
);

export default GlobalStyles;
