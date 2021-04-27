import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primary};
    background: hsla(216, 27%, 17%, 1);
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: "#fff",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
