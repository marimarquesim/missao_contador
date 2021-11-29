import { Box, Heading, Text, Flex, Stack } from '@chakra-ui/react'



export function PublicoAlvo() {

  return (
  
    <Flex
      id='publico'
            direction={['column', 'column', 'column']}
            justifyContent='center'
            display="flex"
            justifyItems='center'
            alignItems='center'
            alignContent='center'
            w="100%"
            minH="250px"
            pb={['5%', '5%', '5%', '0']}
            pt={['5%', '5%', '5%', '0']}
      
            backgroundImage="url('assets/images/bg_header.svg')"
            backgroundPosition="center"
            backgroundSize="cover"
         
            >
            
            
            <Box
                mt="0%"
              w="100%"
              h="100%"
                display='flex'
                flexDirection="column">
                
                <Stack
                  spacing={1}
                  h="100%"
                     color="white"
                    display="flex"
                    direction={['column', 'column', 'column', 'row']}
                    paddingX="5%">

                    <Stack
                        direction="column"
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        justifyItems="center"
                        alignContent="center"
                   
                      textAlign='center'
                      
                    >
                      <Heading fontSize="3.5rem">
                          A quem se destina
                      </Heading>
                      <Text w={["80%", '80%', '80%', '65%']}
              fontSize="1.2rem"
              fontFamily='JosefinRegular'
              lineHeight="25px"
                      >
              Para a participação desta imersão, procuramos pessoas que já possuem escritórios de contabilidade (não importa o tamanho), profissionais do ramo que queiram empreender, jovens que queiram ingressar no mercado contábil, jovens que estejam em processo de sucessão para assumir escritório contábil ou pessoas que atuem em mercado tradicional como o nosso, pois esse conhecimento é aplicável para todos aqui abordados.
                        </Text>
                    </Stack>
                </Stack> 
            </Box>

        </Flex>
  

  );
}



