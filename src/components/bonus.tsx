import { Box, Heading, Text, Flex, Stack  } from '@chakra-ui/react'



export function Bonus() {

  return (
  
    <Flex
      id="bonus"
            direction={['column', 'column', 'column']}
            justifyContent='center'
            display="flex"
            justifyItems='center'
            alignItems='center'
            alignContent='center'
            w="100%"
            minH="250px"
            pb={['5%', '5%', '5%', '2%']}
            pt={['5%', '5%', '5%', '2%']}
      
          backgroundColor="#333333"
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
                  textAlign={[]}
                    >
                      <Heading  fontFamily="JosefinRegular">
                          BÔNUS EXCLUSIVO
                      </Heading>
                      <Text fontFamily="JosefinRegular" fontSize="1.5rem" textAlign={['center', 'center', 'center', 'center', "left"]} w={["auto", "auto", "auto","50%"]} lineHeight="25px"  align={['center', 'center', 'left']} >
                          Você poderá se tornar sócio de uma das maiores empresas de contabilidade do Brasil.*
                      </Text>
                      <Text fontFamily="JosefinRegular" fontSize="1.5rem" textAlign={['center', 'center', 'center', 'center', "left"]}  w={["auto", "auto","auto","50%"]} lineHeight="25px" pt="1%" align={['center', 'center', 'left']}>
                          E ainda... os cincos primeiros a se inscreverem terão direito a uma mentoria individual com o  Jhonny.
                      </Text>
                      <Text fontFamily="JosefinLight" fontSize="0.8rem" textAlign={['center', 'center', 'center', 'center', "left"]}  w={["auto","50%"]} align={['center', 'center', 'left']}>
                          *Mediante aprovação de cadastro.
                        </Text>
                    </Stack>
                </Stack> 
            </Box>

        </Flex>
  

  );
}



