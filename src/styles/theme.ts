/* theme.ts */
import { background, extendTheme } from "@chakra-ui/react";
import { fonts } from '../lib/fonts'
import { config } from "process";
export const theme = extendTheme({

    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    }, 
    styles: {
      global: {
        "html, body": {
          fontFamily: "var(--font-rubik)",
          color: "white",
          bg: "black",
          lineHeight: "tall",
        },
        
      },
    },
    config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    }
});