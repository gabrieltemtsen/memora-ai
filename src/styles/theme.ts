/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { fonts } from '../lib/fonts'
import { config } from "process";
export const theme = extendTheme({

    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    }, 
    config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    }
});