import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'




export function PorqueComprar() {
  
    
    return (

        <Flex
            id="beneficios"
            direction="column"
            maxW="100%"
            minH={["100vh", '100vh', '1000px', '500px', '100vh']}
            pt={["8%", '8%', '5%',  "1%"]}
            pb="5%"
            backgroundImage="url('assets/images/bg_icons.svg')"
            backgroundSize="cover"
            backgroundAttachment={['initial', 'initial', 'initial', 'inherit', "fixed"]}
            backgroundRepeat="no-repeat"
            display="flex"
            alignContent="center"
            justifyContent="center"
            alignItems='center'
            justifyItems='center'
        >
            <Box
                display="flex"
                textAlign="center"
                alignContent="center"
                justifyContent="center"
                >
                <Heading pt={["3%", "3%", "3%"]}
                pb="1%"
                fontFamily="JosefinRegular"
                    color="white" fontSize={['2.8rem', '2.8rem', "3.5rem" ]}
                w={["300px", "auto", '700px', '800px', 'auto']}
                >
                    POR QUE FAZER PARTE DA MISSÃO CONTADOR
                </Heading>
            </Box>

<Box >
            <SimpleGrid flex="1"
                spacingX="60px"
                spacingY="40px"
                pl= "1%"
                pr="1%"
                pt="1%"
                pb="2%"
                columns={{sm: 2, md: 2, lg: 3}}
               
                justifyContent="center" alignItems="center"
                >

                <Box >
                        <Box   
                        boxShadow="dark-lg"
                        rounded="full"
                        bg="transparent"
                        width={["250px", "250px"]}
                        height="250px"
                    >
                        <Box display='flex' justifyContent='center' alignItems="center" >
                            <Box as="img" src="assets/images/icon_cultural.svg" w="250px">

                            </Box>
                         

                        </Box>
                    </Box>
                </Box>

                <Box >
                        <Box
                           boxShadow="dark-lg"
                        rounded="full"
                        bg="transparent"
                        width={["250px", "250px"]}
                        height="250px"
                    >
                        <Box display='flex' justifyContent='center' alignItems="center" >
                            <Box as="img" src="assets/images/icon_networking.svg" w="250px">

                            </Box>
                         

                        </Box>
                    </Box>
                    </Box>
                    
                    <Box >
                        <Box
                        boxShadow="dark-lg"
                        rounded="full"
                        bg="transparent"
                        width={["250px", "250px"]}
                        height="250px"
                    >
                        <Box display='flex' justifyContent='center' alignItems="center" >
                            <Box as="img" src="assets/images/icon_time.svg" w="250px">

                            </Box>
                         

                        </Box>
                    </Box>
                    </Box>
                    
                    <Box >
                        <Box
                        boxShadow="dark-lg"
                        rounded="full"
                        bg="transparent"
                        width={["250px", "250px"]}
                        height="250px"
                    >
                        <Box display='flex' justifyContent='center' alignItems="center" >
                            <Box as="img" src="assets/images/icon_ferramenta.svg" w="250px">

                            </Box>
                         

                        </Box>
                    </Box>
                    </Box>
                    
                    <Box >
                        <Box
                           boxShadow="dark-lg"
                           rounded="full"
                           bg="transparent"
                           width={["250px", "250px"]}
                           height="250px"
                    >
                        <Box display='flex' justifyContent='center' alignItems="center" >
                            <Box as="img" src="assets/images/icon_seguranca.svg" w="250px">

                            </Box>
                         

                        </Box>
                    </Box>
                    </Box>
                    
                    <Box >
                        <Box
                           boxShadow="dark-lg"
                           rounded="full"
                           bg="transparent"
                           width={["250px", "250px"]}
                           height="250px"
                    >
                        <Box display='flex' justifyContent='center' alignItems="center" >
                            <Box as="img" src="assets/images/icon_mkt_digital.svg" w="250px">

                            </Box>
                         

                        </Box>
                    </Box>
                </Box>
                    
               


            </SimpleGrid>
            </Box>

        </Flex>

    );
}