import * as React from "react";
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "../styles/globals.css";
import createEmotionCache from "../utils/createEmotionCache";

import { lightTheme, emotionLightTheme } from "../styles/theme/lightTheme";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <EmotionThemeProvider theme={emotionLightTheme}>
          <Component {...pageProps} />
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
