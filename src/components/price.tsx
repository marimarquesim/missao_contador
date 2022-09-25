import { Box, Heading, Flex, Stack, Image, Text } from "@chakra-ui/react";

export function Preco() {
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      pb={["5%", "5%", "5%"]}
      pt={["5%"]}
      backgroundImage="url('assets/images/bg_icons.svg')"
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
      <Box w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column"]}
          paddingX="5%"
        >
          <Box textAlign={["center", "center", "center", "left"]}>
            <Heading
              fontSize={["3rem", "3rem", "3rem", "4rem"]}
              fontFamily="JosefinRegular"
            >
              Valor da Imersão:
            </Heading>
          </Box>

          <Stack
            direction="column"
            flex="1"
            pt="3%"
            display="flex"
            alignItems="center"
            alignContent="center"
            color="white"
            fontSize="24px"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box
              maxW={"100vw"}
              backgroundColor={"black"}
              paddingY="15px"
              paddingX={"35px"}
              fontFamily="JosefinBold"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              justifyItems="center"
              alignItems={"center"}
              alignContent="center"
              textAlign={"center"}
            >
              <Box>
                <Text fontSize={["30px", "30px", "60px"]}>
                  10x{" "}
                  <Box
                    as="span"
                    fontSize={["70px", "70px", "130px"]}
                    color="red"
                  >
                    {" "}
                    450,00
                  </Box>
                </Text>
              </Box>
              <Text
                fontSize={["27px", "27px", "33px"]}
                fontFamily="JosefinMedio"
              >
                por pessoa,
              </Text>
              <Text
                fontSize={["27px", "27px", "33px"]}
                fontFamily="JosefinMedio"
              >
                ou R$4.000,00 à vista!
              </Text>
              <Text>(economize R$500,00)</Text>
            </Box>
            {/* <Box>
              <Image
                alt="valor"
                src="assets/images/preco.svg"
                w="600px"
                boxShadow="lg"
              />
            </Box> */}
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
