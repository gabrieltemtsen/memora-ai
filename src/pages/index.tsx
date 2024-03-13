import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box minH={'100%'} maxW={'1400px'} marginX={'auto'} mt={'7px'}>
      <Navbar />

      <Hero />

      <Footer />
    </Box>
  );
}
