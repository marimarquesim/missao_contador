import { WhastsAppButton } from "../src/components/whatsapp";
import { Preco } from "../src/components/price";
import { Numeros } from "../src/components/numbers";
import { Vagas } from "../src/components/vagas";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import handleViewport from "react-in-viewport";
import * as gtag from "../lib/gtag";
import { Pix } from "../src/components/pix";

const Block = (props) => {
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return <Numeros />;
  }
  return <div ref={forwardedRef}></div>;
};

const ViewportBlock = handleViewport(Block);

export default function Home() {
  return (
    <Box maxW="100%" backgroundColor="black">
      <Head>
        <meta name="theme-color" content="#000000" />
        <title>Missão Contador</title>
      </Head>

      <Preco />
      <Pix />

      <WhastsAppButton />
    </Box>
  );
}
