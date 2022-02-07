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
      maxH={["915px", "1116px", "1500px", "680px", "680px", "1300px"]}
      pb={["0%", "15%", "0", "0", "0", "0%"]}
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
        mt="1%"
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
          direction={["column", "column", "column", "row"]}
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
            ml={["0", "0", "0", "0", "8%", "10%"]}
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
                src="assets/images/logo.svg"
                w={["500px", "500px", "500px", "500px", "500px", "20vw"]}
                ml={["0", "0", "0", "2%"]}
              />
            </Box>
            <Box w={["auto", "auto", "60%", "60%", "100%"]}>
              <Text
                fontFamily="JosefinMedio"
                fontSize={["2rem", "2rem", "2rem", "2rem", "3rem", "3.9vw"]}
                lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
              >
                O Mercado Tradicional nunca mais será o mesmo...
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
              <Text
                fontFamily="JosefinMedio"
                lineHeight={["25px", "25px", "25px", "25px", "25px", "1.4vw"]}
                w={["310px", "310px", "310px", "310px", "310px", "12vw"]}
                pt="8%"
              >
                <Text
                  fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "2.5vw"]}
                  lineHeight={["40px", "40px", "40px", "40px", "40px", "2.2vw"]}
                >
                  20 e 21/05
                </Text>
                <br />
                <Text
                  fontSize={[
                    "1.7rem",
                    "1.7rem",
                    "1.7rem",
                    "1.7rem",
                    "1.7rem",
                    "1.1vw",
                  ]}
                  mt="-8%"
                >
                  São Paulo - SP
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
            <Box mt={["0%", "3%", "1%", "-3%", "-3%", "0.4%"]}>
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
