import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from '@chakra-ui/react'
import { fonts } from '../lib/fonts'
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ConvexClientProvider from "@/lib/providers/convexCientProvider";
import { Auth0Provider } from '@auth0/auth0-react';


// const authDomain = process.env.NEXT_AUTH0_DOMAIN || '';
// const authClientId = process.env.NEXT_AUTH0_APP_ID || '';

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
      {/* <Auth0Provider
    domain={'dev-3kvo8gurvbtg3koc.us.auth0.com'}
    clientId={'LyAp1HGCIj2yq2dB89rQHAbQJLEwhvBZ'}
    authorizationParams={{
      redirect_uri: process.env.NEXT_PUBLIC_HOST
    }}
  > */}
      <ConvexClientProvider> 
      <Component {...pageProps} />
      </ConvexClientProvider>
      {/* </Auth0Provider> */}

      </QueryClientProvider>
      </Box>
      
    </ChakraProvider>
  );
}
