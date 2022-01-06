import { Box, Text, Flex, Stack, Image, Button } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      maxH={["1003px", "1116px", "1500px", "680px"]}
      pb={["15%", "15%", "0"]}
      pt={["20%", "15%", "3%", "2%"]}
      backgroundImage="url('assets/images/bg_header.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
    >
      <Box mt="1%" w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column", "row"]}
          paddingX="5%"
        >
          <Stack
            direction="column"
            flex="2"
            display="flex"
            alignItems="center"
            alignContent="center"
            color="white"
            fontSize="24px"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box>
              <Image
                alt="Logo 00J"
                src="assets/images/logo.svg"
                w="500px"
                ml={["0", "0", "0", "9%"]}
              />
            </Box>
            <Box w={["auto", "auto", "60%"]}>
              <Text fontFamily="JosefinMedio" fontSize="2rem" lineHeight="30px">
                O Mercado Tradicional nunca mais será o mesmo...
              </Text>
              <Text fontSize="1.25rem" lineHeight="20px" pt="2%">
                Descubra as habilidades mais valiosas da gestão de negócios com
                um dos contadores mais influentes do país!
              </Text>
            </Box>

            <Box
              pt="2%"
              pb="2%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
              alignContent="center"
              textAlign="center"
            >
              {/* <Button bg="#ed0a0a" fontFamily="Skyfall" h="70px" w="140px"
                 _hover={{
                  backgroundColor: 'black'
              }}
              _focus={{
                  focus: 'none',
                  border: 'none',
                  backgroundColor:'black'
              }}
                href="/#vagas"
                as='a'
              > */}
              {/* <Box display="flex"
                  flexDirection="column"
                 
                        alignItems="center"
                  alignContent="center"
                  textAlign="center"
                          >
                            <Text fontSize="1.2rem" fontFamily="Skyfall">
                              INSCREVA-SE
                            </Text>
                
                            <Text fontFamily="Skyfall" fontSize="2.1rem">
                              AGORA!
                            </Text>
                            </Box>
                          </Button> */}
              <Text
                fontFamily="JosefinMedio"
                lineHeight="25px"
                w="310px"
                pt="8%"
              >
                <Text fontSize="3rem" lineHeight={"45px"}>
                  Inscrições em breve
                </Text>
                <br />
                <Text fontSize="1.7rem" mt="-8%">
                  São Paulo - SP
                </Text>
                <Text fontSize="1.5rem" fontFamily="JosefinLight">
                  (PRESENCIAL)
                </Text>
              </Text>
            </Box>
          </Stack>

          <Stack
            direction="column"
            flex="1.5"
            display="flex"
            justifyContent="end"
            alignItems={["center", "center", "center", "start"]}
            justifyItems="end"
            alignContent={["center", "center", "center", "start"]}
          >
            <Box mt={["0%", "3%", "1%", "-3%"]}>
              <Image
                alt="Jhonny"
                src="assets/images/00J.png"
                maxW={["300px", "357px", "400px"]}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
