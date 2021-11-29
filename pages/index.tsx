import { WhastsAppButton } from '../src/components/whatsapp';
import { Header } from '../src/components/header';
import { Timer } from '../src/components/timer';
import { Bonus } from '../src/components/bonus';
import { JhonnyVSJ1 } from '../src/components/jhonnyvs007';
import { About } from '../src/components/about';
import { PorqueComprar } from '../src/components/why_buy';
import { PublicoAlvo } from '../src/components/public';
import { Conteudo } from '../src/components/content';
import { Video } from '../src/components/video';
import { Clientes } from '../src/components/clients_slider';
import { Estrutura } from '../src/components/estrutura';
import { Preco } from '../src/components/price';
import { Numeros } from '../src/components/numbers';
import { Vagas } from '../src/components/vagas';

import Head from "next/head";

import { Box, Text } from '@chakra-ui/react'
import { Footer } from '../src/components/footer';

import handleViewport from 'react-in-viewport';
import * as gtag from '../lib/gtag'



const Block = (props) => {
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <Numeros />
    )
  }
  return (
    <div ref={forwardedRef}>

    </div>
  );
};

const ViewportBlock = handleViewport(Block);

export default function Home() {

  return (
    //   <Box maxW="100%" backgroundColor="black">
    //     <Head>

    //   <meta name="theme-color" content="#000000" />
    //       <title>Missão Contador</title>


    // </Head>

    //      <Timer/> 
    //     <Header /> 
    //     <Bonus />
    //     <Video/>
    //      <JhonnyVSJ1 />
    //     <About />
    //     <PorqueComprar /> 
    //     <PublicoAlvo />
    //     <Conteudo />
    //     <Clientes />
    //     <Estrutura />
    //     <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    //     <Preco />
    //       <Vagas />
    //       <Footer/>
    //     <WhastsAppButton />   

    //     </Box>


    <Box w="100%"
      h="100vh"
      display='flex'
      justifyContent='center'
      justifyItems='center'
      alignContent='center'
      alignItems='center'
      backgroundImage="url('assets/images/bg_icons.svg')"
      backgroundSize="cover"
      backgroundAttachment={['initial', 'initial', 'initial', 'inherit', "fixed"]}
      backgroundRepeat="no-repeat"
    >
      <Text fontSize="5rem" color='white' fontFamily='JosefinBold' >
        Estamos em manutenção
      </Text>

    </Box>
  )
}
