import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export function PorqueComprar() {
  return (
    <Flex
      id="beneficios"
      direction="column"
      maxW="100%"
      minH={["100vh", "100vh", "1000px", "500px", "100vh", "50vh"]}
      pt={["8%", "8%", "5%", "1%", "1%", "2%"]}
      pb="3%"
      backgroundImage="url('assets/images/bg_icons.svg')"
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
      backgroundRepeat="no-repeat"
      display="flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
    >
      <Box
        display="flex"
        textAlign="center"
        alignContent="center"
        justifyContent="center"
      >
        <Heading
          pt={["3%", "3%", "3%"]}
          pb="1%"
          fontFamily="JosefinRegular"
          color="white"
          fontSize={["2.8rem", "2.8rem", "3.5rem", "3.5rem", "3.1vw"]}
          w={["300px", "auto", "700px", "800px", "90vw"]}
        >
          Por quê fazer parte do Missão Contador?
        </Heading>
      </Box>

      <Box>
        <SimpleGrid
          flex="1"
          spacingX="60px"
          spacingY="40px"
          pl="1%"
          pr="1%"
          pt="1%"
          pb="2%"
          columns={{ sm: 2, md: 2, lg: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Box
              boxShadow="dark-lg"
              rounded="full"
              bg="transparent"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  as="img"
                  src="assets/images/icon_cultural.svg"
                  width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              rounded="full"
              bg="transparent"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  as="img"
                  src="assets/images/icon_networking.svg"
                  width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              rounded="full"
              bg="transparent"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  as="img"
                  src="assets/images/icon_time.svg"
                  width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              rounded="full"
              bg="transparent"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  as="img"
                  src="assets/images/icon_ferramenta.svg"
                  width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              rounded="full"
              bg="transparent"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  as="img"
                  src="assets/images/icon_seguranca.svg"
                  width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              rounded="full"
              bg="transparent"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  as="img"
                  src="assets/images/icon_mkt_digital.svg"
                  width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
                ></Box>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box fontFamily="Skyfall" mt="10px">
        {/* aqui é um botão */}
        <Button
          color={"white"}
          backgroundColor="#ed0a0a"
          pt="3%"
          borderRadius={"7px"}
          as="a"
          href="#footer"
          h={["80px"]}
          w={["170px"]}
          _hover={{
            backgroundColor: "black",
          }}
          _focus={{
            focus: "none",
            border: "none",
            backgroundColor: "black",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            alignContent="center"
            textAlign="center"
          >
            <Text fontSize={["1.5rem"]}>QUERO</Text>

            <Text fontSize={["1.5rem"]}>PARTICIPAR</Text>
          </Box>
        </Button>
      </Box>
    </Flex>
  );
}
