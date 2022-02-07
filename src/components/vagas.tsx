import { Box, Heading, Text, Flex, Stack, Button } from "@chakra-ui/react";

export function Vagas() {
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      id="vagas"
      pb={["5%"]}
      pt={["5%"]}
      backgroundColor="#333333"
    >
      <Box mt="1%" w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column", "row"]}
          paddingX={["5%", "5%", "5%", "15%"]}
        >
          <Stack
            direction="column"
            flex="2"
            display="flex"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
            color="white"
            fontSize="24px"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box>
              <Heading fontSize={["2.5rem", "2.5rem", "2.5rem", "4rem"]}>
                Lote 1 - <br />
                Vagas Limitadas!
              </Heading>
              <Text
                lineHeight="25px"
                w={["auto", "auto", "auto", "590px"]}
                fontFamily="JosefinRegular"
                pt={["5%", "5%", "5%", "2%"]}
              >
                Não perca a oportunidade de descobrir os segredos de um dos
                melhores contadores do país.
              </Text>
            </Box>
          </Stack>

          <Stack
            direction="column"
            flex="1.5"
            display="flex"
            justifyContent="center"
            alignItems={["center", "center", "center"]}
            justifyItems="center"
            alignContent={["center", "center", "center"]}
            textAlign="center"
            pt={["5%", "5%", "5%", "0"]}
          >
            <Box mr={["", "6%"]}>
              <Heading fontSize={["2rem", "2rem", "2.9rem"]}>
                INSCREVA-SE AGORA
              </Heading>
            </Box>

            <Box fontFamily="JosefinMedio">
              <Button
                bg="#ed0a0a"
                pt="3%"
                as="a"
                href="https://link.pagar.me/lBJ3wXGykq"
                target="_blank"
                h={["80px", "100px"]}
                w={["200px", "250px"]}
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
                  <Text fontSize={["1.3rem", "1.7rem"]}>PAGAMENTO</Text>

                  <Text fontSize={["2.1rem", "3rem"]}>À VISTA</Text>
                </Box>
              </Button>

              <Button
                bg="#ed0a0a"
                mt="8%"
                as="a"
                href="https://link.pagar.me/lH11Hmz1k5"
                target="_blank"
                h={["80px", "100px"]}
                w={["200px", "250px"]}
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
                  <Text fontSize={["1.3rem", "1.7rem"]}>PAGAMENTO</Text>

                  <Text fontSize={["1.7rem", "2.1rem", "2rem"]}>PARCELADO</Text>
                </Box>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
