import { Box, Heading, Text, Flex, Stack, Image, Button  } from '@chakra-ui/react'
import CountUp from 'react-countup';


export function Numeros() {

  return (
  
    <Flex
      direction={['column', 'column', 'column']}
      justifyContent='center'
      display="flex"
      justifyItems='center'
      alignItems='center'
      alignContent='center'
      w="100%"
      pb={['5%', '5%', '5%']}
      pt={['5%']}
      backgroundImage="url('assets/images/bg-conteudo.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment={['initial', 'initial', 'initial', 'inherit', "fixed"]}>
            
        <Box
          mt="1%"
          w="100%"
          h="100%"
          justifyContent='center'
          display="flex"
          justifyItems='center'
          alignItems='center'
          alignContent='center'
        flexDirection="column"
      textAlign="center"
      >
          
          <Stack
            spacing={1}
            w="100%"
            color="white"
            justifyContent='center'
            display="flex"
            justifyItems='center'
            alignItems='center'
            alignContent='center'
            direction={['column', 'column', 'column']}
            paddingX="5%">
              
              <Box>
                <Heading
                  fontSize={['3rem', '3rem', '3rem', "4rem"]}
                  fontFamily="JosefinRegular">
                    NOSSOS NÚMEROS
                </Heading>
              </Box> 
              <Stack
                        direction="column"
                        flex="1"
                        pt="3%"
                        display="flex"
                        alignItems="center"
                        alignContent="center"
                        justifyContent="center"
                        justifyItems="center"
                        color='white'
                        fontSize={['5rem', '5rem', '5rem', '4.5rem', "6rem"]}
                        lineHeight="60px"
                      
                      >
            <Box display='flex'
                     alignItems="center"
                     alignContent="center"
                     justifyContent="center"
                     justifyItems="center"
                     flexDirection={['column', 'column', 'column', 'row']}
            >
              <Box fontFamily="Digital" mr="5%"
                       display='flex'
                       alignItems="center"
                       alignContent="center"
                        justifyContent="center"
                   justifyItems="center"
                flexDirection='column'
                pt={["5%", '0']}
                w="200px"
              >
                        <CountUp start={0}
                            end={2.5}
                            duration={3.5}
                            separator=" "
                            decimals={3}
                            prefix="+" />
                <Text
                  h="50px"
                  fontSize="2rem" fontFamily="JosefinRegular" lineHeight="30px" mt="7%" align="center">
                Clientes Recorrentes
                </Text>
              </Box>
              


              <Box fontFamily="Digital" mr="5%"
                       display='flex'
                       alignItems="center"
                       alignContent="center"
           justifyContent="center"
           justifyItems="center"
                flexDirection='column'
                pt={["10%", '10%', '0']}
                w="200px"
              >
                        <CountUp start={0}
                                        end={3}
                                        duration={3.5}
                                        separator=" "
                  decimals={0}
                  prefix="+"
                                      />
          
          <Text  h="50px" fontSize="2rem" fontFamily="JosefinRegular" lineHeight="30px" mt="7%" align="center">
                Contratos por Dia
                </Text>
              </Box>
              

              <Box fontFamily="Digital" mr="5%"
                display='flex'
                pt={["10%", '10%', '0']}
                       alignItems="center"
                       alignContent="center"
           justifyContent="center"
                justifyItems="center"
                w="200px"
              flexDirection='column'>
                    <CountUp start={0}
                                        end={250}
                                        duration={3.5}
                                        separator=" "
                  decimals={0}
                  prefix="+"
                                      />
          
          <Text  h="50px" fontSize="2rem" fontFamily="JosefinRegular" lineHeight="30px" mt="7%" align="center">
                Colaboradores
                </Text>
              </Box>

              <Box fontFamily="Digital" mr="5%"
                display='flex'
                w="200px"
                pt={["10%", '10%', '0']}
                       alignItems="center"
                       alignContent="center"
           justifyContent="center"
           justifyItems="center"
              flexDirection='column'>
                   <CountUp start={0}
                                        end={24}
                                        duration={3.5}
                                        separator=" "
                  decimals={0}
                
                                      />
          
          <Text  h="50px" fontSize="2rem" fontFamily="JosefinRegular" lineHeight="30px" mt="11%" align="center">
                Estados Presentes
                </Text>
              </Box>

              <Box fontFamily="Digital" mr="5%"
                display='flex'
                pt={["10%", '10%', '0']}
                alignItems="center"
                w="200px"
                       alignContent="center"
           justifyContent="center"
           justifyItems="center"
              flexDirection='column'>
                   <CountUp start={0}
                                        end={25}
                                        duration={3.5}
                                        separator=" "
                  decimals={0}
                 
                                      />
          
          <Text  h="50px" fontSize="2rem" fontFamily="JosefinRegular" lineHeight="30px" mt="11%" align="center">
                Anos de Mercado
                </Text>
              </Box>
          

          

               


                        </Box>
            
                    </Stack>

                   
                        
                
                </Stack> 
            </Box>

        </Flex>
  

  );
}



