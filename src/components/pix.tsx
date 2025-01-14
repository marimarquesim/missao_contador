import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";

export function Pix() {
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
            <Box
              alignItems={["center", "center", "center", "baseline"]}
              alignContent={["center", "center", "center", "baseline"]}
              justifyContent={["center", "center", "center", "left"]}
              justifyItems={["center", "center", "center", "left"]}
              display={"flex"}
              flexDirection="column"
            >
              <Image
                alt="Jhonny"
                src="assets/images/Lote1Esgotado.svg"
                w={["180px"]}
              />{" "}
              <Image
                mt="10px"
                alt="Jhonny"
                src="assets/images/Lote2Esgotado.svg"
                w={["180px"]}
              />{" "}
              <Box
                display={"flex"}
                flexDirection="row"
                lineHeight={"1.8rem"}
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                justifyItems="center"
              >
                <Heading fontSize={["2.5rem", "2.5rem", "2.5rem", "4rem"]}>
                  Lote - 3
                </Heading>
              </Box>
              <Heading
                fontSize={["2.5rem", "2.5rem", "2.5rem", "4rem"]}
                lineHeight={"1.8rem"}
              >
                <br />
                Vagas Limitadas!
              </Heading>
              <Text
                lineHeight="25px"
                w={["auto", "auto", "auto", "590px"]}
                fontFamily="JosefinRegular"
                pt={["5%", "5%", "5%", "7%"]}
              >
                Não perca a oportunidade de descobrir os segredos de um dos
                melhores contadores do país.
              </Text>
            </Box>
          </Stack>

          <Stack
            direction={["column", "column", "column"]}
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

            <Box
              fontFamily="JosefinMedio"
              display={"flex"}
              alignContent="center"
              alignItems={"center"}
              justifyContent="0"
              justifyItems={"0"}
              flexDirection="column"
            >
              {/* Aqui é um botão */}
              <Box
                bg="#ed0a0a"
                pt="3%"
                borderRadius={"7px"}
                target="_blank"
                h={["80px", "100px"]}
                w={["200px", "250px"]}
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
              </Box>
            </Box>

            <Box>
              <Text
                fontSize={"1.8rem"}
                lineHeight="25px"
                w={["auto", "auto", "auto"]}
                fontFamily="JosefinBold"
                pt={["5%", "5%", "5%", "7%"]}
              >
                Chave PIX - 46.390.988/0001-43
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}

// Missão Contador – 1º Lote

// Missão Contador 3 – 1º lote - 50 % de desconto no PIX - R$1450,00
// Chave PIX - 46.390.988/0001-43

// Missão Contador 3 – 1º lote - 50 % de desconto em até 10 x - R$1750,00
// https://link.pagar.me/lS1rjuros5

// Missão Contador 3 – 1º lote no PIX - R$2900,00
// Chave PIX - 32.886.411/0001-12

// Missão Contador – 2º Lote

// Missão Contador 3 – 2º lote - 50 % de desconto no PIX - R$1750,00
// Chave PIX - 32.886.411/0001-12

// Missão Contador 3 – 2º lote - 50 % de desconto em até 10 x - R$2000,00
// https://link.pagar.me/lr1mdPrjj5

// Missão Contador 3 – 2º lote no PIX - R$3500,00
// Chave PIX - 32.886.411/0001-12

// Missão Contador 3 – 2º lote em até 10 x - R$4000,00
// https://link.pagar.me/lBJDSwHijc

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Missão Contador – 3º Lote

// Missão Contador 3 – 3º lote - 50 % de desconto no PIX - R$2000,00
// Chave PIX - 32.886.411/0001-12

// Missão Contador 3 - 3 lote - 50 % de desconto - R$2250,00
// https://link.pagar.me/lSkgZA8Hssq

// Missão Contador 3 – 3º lote no PIX - R$4000,00
// Chave PIX - 32.886.411/0001-12

// Missão Contador 3 - 3 lote - R$4500,00
// https://link.pagar.me/lHkKCHSiic
