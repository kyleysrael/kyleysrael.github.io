import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme, getDesignTokens } from "@/constant/theme";
import { useThemeMode } from "@/constant/useThemeMode";

export default function App({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useThemeMode();

  useEffect(() => {
    const theme = isDarkMode ? getDesignTokens("dark") : getDesignTokens("light");
    document.documentElement.style.backgroundColor = theme.palette.background.default;
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <link rel="icon" href="/next.svg" />
        <title>kyle.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
