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
      maxH={["1750px", "1380px", "1530px", "1750px", "750px", "1300px"]}
      pb={["3%", "14%", "0", "0", "0", "0%"]}
      pt={["2%", "15%", "3%", "2%"]}
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
      <Box
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        justifyItems="center"
        paddingX="7%"
      >
        <Flex
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          justifyItems="center"
          color="white"
          w="100%"
          direction={["column", "column", "column", "column", "row"]}
        >
          <Flex
            w="100%"
            flex={1}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
            direction={"column"}
            pb={["0", "0", "0", "0", "0", "2%"]}
            ml={["0", "0", "0", "0", "8%", "2%"]}
          >
            {" "}
            <Box
              display={"flex"}
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
              alignContent="center"
            >
              <Image
                alt="Logo 00J"
                src="assets/images/logo.png"
                w={["400px", "400px", "400px", "400px", "400px", "20vw"]}
                ml={["0", "0", "0", "2%"]}
              />
            </Box>
            <Box
              w={["auto", "auto", "60%", "83%", "100%"]}
              mt="2%"
              textAlign={["center", "center", "center", "left"]}
            >
              <Text
                fontFamily="JosefinMedio"
                fontSize={["2rem", "2rem", "2rem", "2rem", "1.8rem", "2.5rem"]}
                lineHeight={["35px", "35px", "35px", "35px", "38px", "2.6vw"]}
              >
                Você é{" "}
                <Box as="span" fontFamily={"JosefinBold"}>
                  {" "}
                  contador{" "}
                </Box>
                e gostaria de aprender como aumentar o seu faturamento, investir
                em marketing digital, fazer a melhor gestão de pessoas e
                processos e ainda inovar com a tecnologia?
              </Text>
              <Text
                fontSize={[
                  "1.25rem",
                  "1.25rem",
                  "1.25rem",
                  "1.25rem",
                  "1.25rem",
                  "1.6vw",
                ]}
                lineHeight={["20px", "20px", "20px", "20px", "20px", "1.4vw"]}
                pt="2%"
              >
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
              {/* <Box mt="20px">
                <Text fontSize={"1.8rem"} fontFamily={"JosefinBold"}>
                  Inscreva-se já:
                </Text>
              </Box>
              <Box fontFamily="JosefinMedio" mt="3px">
                 <Button
                  backgroundColor="#ed0a0a"
                  pt="3%"
                  borderRadius={"7px"}
                  as="a"
                  href="/pagamento"
                  target="_blank"
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
              </Box> */}
              <Text
                fontFamily="JosefinMedio"
                lineHeight={["25px", "25px", "25px", "25px", "25px", "1.4vw"]}
                w={["350px", "350px", "350px", "350px", "350px", "14vw"]}
                pt="10%"
                mt={["1px", "1px", "1px", "0px"]}
              >
                <Text
                  fontSize={[
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "2vw",
                  ]}
                  lineHeight={["40px", "40px", "40px", "40px", "35px", "2.2vw"]}
                >
                  06, 07 e 08/10 <br /> São Paulo - SP
                </Text>
                <Text textAlign={["center", "center", "center", "left"]}>
                  <Box as="span"> Local do evento:</Box>
                  <br />
                  Espaço APAS
                  <br />
                  R. Pio XI, 1200 - Alto da Lapa,
                  <br />
                  CEP: 05060-001
                </Text>
                <Text
                  fontSize={[
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1vw",
                  ]}
                  fontFamily="JosefinLight"
                >
                  (PRESENCIAL)
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex
            flex={1}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
          >
            {" "}
            <Box mt={["0%", "3%", "1%", "4%", "15%", "21%"]}>
              <Image
                alt="Jhonny"
                src="assets/images/00J.png"
                maxW={["280px", "357px", "350px", "400px", "400px", "30vw"]}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
