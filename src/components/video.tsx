import {
  Box,
  Flex,
  Stack,
  AspectRatio,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";

export function Video() {
  return (
    <Flex
      id="video"
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      minH={["50vh", "130vh", "50vh", "50vh"]}
      pb={["5%", "5%"]}
      pt={["5%", "5%"]}
      backgroundImage="url('assets/images/bg-video.svg')"
      backgroundPosition={["left", "left", "center"]}
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
    >
      <Box
        display="flex"
        textAlign="center"
        alignContent="center"
        justifyContent="center"
        justifyItems={"center"}
      >
        <Heading
          textAlign={"center"}
          pt={["3%", "3%", "3%"]}
          pb="1%"
          fontFamily="JosefinRegular"
          color="white"
          fontSize={["2.2rem", "2.2rem", "2.5rem", "2.5rem", "2.5vw"]}
          w={["300px", "auto", "700px", "800px", "80vw"]}
        >
          Aprenda com o SERAC, uma das grandes referências em contabilidade do
          Brasil, responsável por assessorar grandes personalidades e empresas.
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
              backgroundColor="rgb(0 , 0, 0, 0.8)"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              color="white"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Heading fontSize={"7rem"}>+3K</Heading>
                <Text
                  fontSize="2rem"
                  textAlign={"center"}
                  lineHeight="1.7rem"
                  mt="15px"
                  fontFamily={"JosefinBold"}
                >
                  Clientes recorrentes
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              backgroundColor="rgb(0 , 0, 0, 0.8)"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              color="white"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Heading fontSize={"7rem"}>+20</Heading>
                <Text
                  fontSize="2rem"
                  textAlign={"center"}
                  lineHeight="1.8rem"
                  mt="15px"
                  fontFamily={"JosefinBold"}
                >
                  Estados do Brasil
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              backgroundColor="rgb(0 , 0, 0, 0.8)"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              color="white"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Heading fontSize={"7rem"}>+20</Heading>
                <Text
                  fontSize="1.6rem"
                  textAlign={"center"}
                  lineHeight="1.6rem"
                  mt="15px"
                  fontFamily={"JosefinBold"}
                >
                  Marcas nacionais reconhecidas
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              backgroundColor="rgb(0 , 0, 0, 0.8)"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              color="white"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Heading fontSize={"6.5rem"}>+270</Heading>
                <Text
                  fontSize="2rem"
                  textAlign={"center"}
                  lineHeight="1.5rem"
                  mt="15px"
                  fontFamily={"JosefinBold"}
                >
                  Colaboradores
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              backgroundColor="rgb(0 , 0, 0, 0.8)"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              color="white"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Heading fontSize={"7rem"}>+3</Heading>
                <Text
                  fontSize="1.6rem"
                  textAlign={"center"}
                  lineHeight="1.7rem"
                  mt="15px"
                  fontFamily={"JosefinBold"}
                >
                  Contratos vendidos por dia
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              boxShadow="dark-lg"
              backgroundColor="rgb(0 , 0, 0, 0.8)"
              width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              height={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              color="white"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Heading fontSize={"6.5rem"}>+100</Heading>
                <Text
                  fontSize="1.5rem"
                  textAlign={"center"}
                  lineHeight="1.5rem"
                  mt="15px"
                  fontFamily={"JosefinBold"}
                >
                  milhões de seguidores na rede de nossos clientes
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
