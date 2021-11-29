import { Box, Icon, Text, Flex, Stack, FormControl,
    FormLabel,
    Button,
    Textarea,
    FormErrorMessage,
    FormHelperText, Input  } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutubeSquare, FaWhatsapp } from "react-icons/fa"
import { useState } from 'react';
import axios from 'axios';

export function Footer() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cidade, setCidade] = useState("")
    const [mensagem, setMensagem] = useState("")

    return (
      
        <Flex
            direction={['column', 'column', 'column']}
            justifyContent='center'
            display="flex"
            justifyItems='center'
            alignItems='center'
            alignContent='center'
            w="100%"
            maxH={[ "1003px", "1116px", "150vh", "680px"]}
            pb='5%'
            pt='5%'
            backgroundColor="black"
            >
            
            
            <Box
                mt="1%"
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
                        pl={['0', '0', '0', '5%']}
                        direction="column"
                      flex="0.7"
                        display="flex"
                        alignItems="center"
                        alignContent="center"
                        color='white'
                      fontSize="24px"
                        textAlign={['center', 'center', 'center', 'left']}>
                        <Box  direction="column"
                            alignItems="center"
                            alignContent="center"
                            flexWrap="wrap"
                            display="flex"
                            w="220px"
                            textAlign="left"
                            fontSize="1.2rem"
                            lineHeight="25px"
                        >
                            <Text as="a" href="/#bonus">
                            Bônus exclusivo
                          
                            </Text>

                            <Text as="a" href="/#video">
                            Vídeo do Pitch
                            </Text>
                            
                            <Text as="a" href="/#jhonnyvs007">
                            Jhonny Vs 00J

                            </Text>
                            
                            <Text as="a" href="/#sobre">
                            Quem é Jhonny Martins

                            </Text>
                            
                            <Text as="a" href="/#beneficios">
                            Por que fazer parte da Missão

                            </Text>
                            
                            <Text as="a" href="/#publico">
                            A quem se destina
                            </Text>
                            

                            <Text as="a" href="/#conteudo">
                            O que você irá aprender
                            </Text>
                            
                            <Text as="a" href="/#clientes">
                            Nossos clientes

                            </Text>
                            
                            <Text as="a" href="/#estrutura">
                            Nossa Estrutura
                            </Text>
                            
                            <Text as="a" href="/#numeros">
                            Nossos números
                            </Text>
                            
                            </Box>
                        

                    </Stack>

                    <Stack
                        direction="column"
                        flex="1"
                        display="flex"
                        justifyContent='start'
                        alignItems= "center"
                        justifyItems='center'
                        alignContent='center'
                    pb="7%"
                        
                    >
                        
                        <Text fontSize="1.5rem">
                        Ficou com alguma dúvida?
                        </Text>
                        <Box
                            pt="5%"
                            as="a"
      
      href="https://api.whatsapp.com/send?phone=551137290513&text=Ol%C3%A1,%20podem%20me%20ajudar?"
          target="_blank">
                            <Button
                                backgroundColor="transparent"
                            fontSize='5rem'
                                leftIcon={<FaWhatsapp />}
                                _hover={{
                                    hover: 'none'
                                }}
                                _focus={{
                                    focus: 'none'
                                }}
                            />

                          
                        </Box>

                        <Box
                            pt="5%"
                          display="flex"
                          alignItems="center"
                          alignContent="center"
                          justifyContent='center'
                          justifyItems='center'
                          direction='row'
                          fontSize="2.5rem"
                          color="white">
                <Box mr="5%">
                    <Text as="a" href="https://www.facebook.com/profile.php?id=100016082825172" target="_blank" >
                        <Icon as={FaFacebook} />
                    </Text>
                </Box>
                <Box mr="5%" as="a" href="https://instagram.com/jhonnymartins" target="_blank">
                    <Text>
                        <Icon as={FaInstagram} />
                    </Text>
                </Box>
                <Box mr="5%">
                    <Text as="a" href="https://www.linkedin.com/in/jonathan-martins-988a31165" target="_blank">
                        <Icon as={FaLinkedin} />
                    </Text>
                </Box>
                <Box ml="1%">
                    <Text as="a" href="https://www.youtube.com/channel/UCIeuyUqWD7pi_RHwt62Q_DA" target="_blank" ml="1%">
                        <Icon as={FaYoutubeSquare} ml="1%" />
                    </Text>
                </Box>
         
                      </Box>
                        
                    </Stack>


                    <Stack
                        direction="column"
                        flex="1"
                        display="flex"
                        justifyContent='center'
                        alignItems={["center",  "center", "center",'start']}
                        justifyItems='center'
                        alignContent='center'
                   
                        
                    >
                        <Box display="flex"
                        flexDirection="row"
                        >
                        <FormControl id="nome" mr="5%">
                            <FormLabel>Nome </FormLabel>
                                <Input type="nome" h="30px" backgroundColor="white" color="black"
                                onChange={(value) => {
                                    setName(value.currentTarget.value);

                                }}
                                />
  
                            </FormControl>
                            
                            <FormControl id="email">
  <FormLabel>Email </FormLabel>
                                <Input type="email" h="30px" backgroundColor="white" color="black"
                                    onChange={(value) => {
                                        setEmail(value.currentTarget.value);
                                    }}
                                />
  
</FormControl>
                        </Box>


                        <Box display="flex"
                        flexDirection="row"
                        >
                        <FormControl id="cidade" mr="5%">
  <FormLabel>Cidade </FormLabel>
                                <Input type="cidade" h="30px" backgroundColor="white" color="black"
                                onChange={(value) => {


                                    setCidade(value.currentTarget.value);



                                }}
                                />
  
                            </FormControl>
                            
                            <FormControl id="telefone">
  <FormLabel>Telefone </FormLabel>
  <Input type="telefone"       onChange={(value) => {
                                                setTelefone(value.currentTarget.value);
                                            }} h="30px" backgroundColor="white" color="black"/>
  
</FormControl>
                        </Box>
                     
                        <Box display="flex" justifyContent="center" alignContent="center" pt="2%">
                                        <Textarea onChange={(value) => {
                                            setMensagem(value.currentTarget.value);}} 
                                            resize="none" 
                                backgroundColor='white'
                                color='black'
                                            placeholder="MENSAGEM" 
                                            w="360px" 
                                            ml="-3%" 
                                            mr="-3%" 
                                            h="100px" />
                                    </Box>


                        <Button 
                                mt="2%"
                                ml="35%"
                                color="white"
                                bg="#ed0a0a"
                                _hover={{
                                    bg: 'white',
                                    color:'black'
                                }}
                                _focus={{ boxShadow: "none" }}
                              
                                
                                onClick={async () => {



                                    var model = {
                                        ToAddresses: [{
                                            Name: "Marketing SERAC",
                                            Address: "marketing@souserac.com"
                                        },
                                     
                                        ],
                                        FromAddresses: [{
                                            Name: "Contato Missão Contador",
                                            Address: "serac@souserac.com"
                                        }],
                                        Subject: "CONTATO SITE",
                                        Content: `<h1>Contato Missão Contador</h1>
                                                  <br/><br/>
                                                  ${name}
                                                  <br/>
                                                  ${telefone}
                                                  <br/>
                                                  ${email}
                                                  <br/>
                                                  ${cidade}
                                                  <br/>
                                                  ${mensagem}`
                                    };

                                    try {

                                        const response = await axios.post("https://api.souserac.com/envioEmailSites/api/SendEmail/Send?id=D90FE81E-4347-4E50-922C-E351A25837DE", model)

                                        alert('O forumlário foi enviado')

                                    } catch (err) {

                                        alert('Erro')

                                    }
                                }} >Enviar</Button>
                    </Stack>
                </Stack> 
            </Box>

        </Flex>
  
  
  
            
    //         <Box
    //             mt="1%"
    //           w="100%"
    //           h="100%"
    //             display='flex'
    //             flexDirection="column">
                
    //             <Stack
    //               spacing={1}
    //               h="100%"
    //                  color="white"
    //                 display="flex"
    //                 direction={['column', 'column', 'column', 'row']}
    //                 paddingX="5%">

    //                 <Stack
    //                     direction="column"
    //                   flex="1.5"
    //                     display="flex"
    //                     alignItems="center"
    //                       alignContent="center"
    //                       justifyContent='center'
    //                       justifyItems='center'
    //                     color='white'>
               
    //                   <Box
                
    //                       display="flex"
    //                       alignItems="center"
    //                       alignContent="center"
    //                       justifyContent='center'
    //                       justifyItems='center'
    //                       direction='row'
    //                       fontSize="2.5rem"
    //                       color="white">
    //             <Box mr="5%">
    //                 <Text as="a" href="https://www.facebook.com/souserac/" target="_blank" >
    //                     <Icon as={FaFacebook} />
    //                 </Text>
    //             </Box>
    //             <Box mr="5%" as="a" href="https://www.instagram.com/sou_serac/" target="_blank">
    //                 <Text>
    //                     <Icon as={FaInstagram} />
    //                 </Text>
    //             </Box>
    //             <Box mr="5%">
    //                 <Text as="a" href="https://www.linkedin.com/company/souserac?originalSubdomain=br" target="_blank">
    //                     <Icon as={FaLinkedin} />
    //                 </Text>
    //             </Box>
    //             <Box ml="1%">
    //                 <Text as="a" href="https://www.youtube.com/channel/UCIeuyUqWD7pi_RHwt62Q_DA" target="_blank" ml="1%">
    //                     <Icon as={FaYoutubeSquare} ml="1%" />
    //                 </Text>
    //             </Box>
         
    //                   </Box>
                      


    //                   <Box
                
    //             display="flex"
    //             alignItems="center"
    //             alignContent="center"
    //             justifyContent='center'
    //             justifyItems='center'
    //             direction='row'
    //             fontSize="2.5rem"
    //             color="white">
    //  <Box >
    //                 <Text fontSize="0.8rem" mr="2%">
    //                     SERAC© 2021. Todos os direitos reservados.
    //                 </Text>
    //             </Box>
          
            
    //             <Box >
    //                 <Text fontSize="0.8rem">
    //                     Desenvolvido por Dpto. de Marketing SERAC
    //                 </Text>
    //             </Box>

    //               </Box>

    //                 </Stack>

    //                 <Stack
    //                     direction="column"
    //                     flex="2"
    //                     display="flex"
    //                     justifyContent='center'
    //                     alignItems={["center",  "center", "center"]}
    //                     justifyItems='center'
    //                     alignContent={["center", "center", "center"]}
                        
    //                 >
    //                 <Image
    //             alt="Logo 00J"
    //             src="/assets/images/logo.svg"
    //             w="500px"
             
    //           />
                        
    //                 </Stack>
    //             </Stack> 
    //         </Box>

    //     </Flex>
  

  );
}



