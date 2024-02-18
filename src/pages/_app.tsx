import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from '@chakra-ui/react'
import { fonts } from '../lib/fonts'
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ConvexClientProvider from "@/lib/providers/convexCientProvider";
export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  <style jsx global>
  {`
    :root {
      --font-rubik: ${fonts.rubik.style.fontFamily};
    }
  `}
</style>
  return (
    <ChakraProvider theme={theme}>
      <Box overflow={'hidden'} >
      <QueryClientProvider client={queryClient}>
      <ConvexClientProvider> 
      <Component {...pageProps} />
      </ConvexClientProvider>
      
      </QueryClientProvider>
      </Box>
      
    </ChakraProvider>
  );
}
