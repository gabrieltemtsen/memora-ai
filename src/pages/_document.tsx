import { theme } from "@/styles/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Memora AI - Preserving memories and connecting generations. Powered by Affinidi and ConvexDev. Explore the future of remembrance today!" />
        <meta property="og:title" content="Memora AI" />
        <meta property="og:description" content="Preserving memories and connecting generations. Powered by Affinidi and ConvexDev. Explore the future of remembrance today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memora-ai.vercel.app/" />
        <meta property="og:image" content="https://i.postimg.cc/mkZGzCtg/ai-hero.png" />
        <meta name="twitter:title" content="Memora AI" />
        <meta name="twitter:description" content="Preserving memories and connecting generations. Powered by Affinidi and ConvexDev. Explore the future of remembrance today!" />
        <meta name="twitter:image" content="https://i.postimg.cc/mkZGzCtg/ai-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <title>
        Memora AI
      </title>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
