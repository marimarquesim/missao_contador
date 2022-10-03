import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Button,
} from "@chakra-ui/react";

export function PublicoAlvo() {
  return (
    <Flex
      id="publico"
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      minH="250px"
      pb={["5%", "5%", "5%", "2%"]}
      pt={["5%", "5%", "5%", "2%"]}
      backgroundImage="url('assets/images/bg_header.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box mt="0%" w="100%" h="100%" display="flex" flexDirection="column">
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
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            justifyItems="center"
            alignContent="center"
            textAlign="center"
          >
            <Heading
              fontSize={["2rem", "2rem", "2rem", "2rem", "3rem", "3.9vw"]}
              lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
              mb="2%"
            >
              A quem se destina?
            </Heading>
            <Text
              w={["80%", "80%", "80%", "65%"]}
              fontSize={[
                "1.5rem",
                "1.5rem",
                "1.5rem",
                "1.5rem",
                "1.5rem",
                "1.5vw",
              ]}
              lineHeight={["25px", "25px", "25px", "25px", "25px", "2.5vw"]}
              fontFamily="JosefinRegular"
              textAlign={"left"}
            >
              <UnorderedList
                fontSize="1.7rem"
                fontFamily={"JosefinRegular"}
                mt="10px"
              >
                <ListItem lineHeight={"2.3rem"}>
                  Contadores que queiram ir para o próximo nível;
                </ListItem>
                <ListItem lineHeight={"2.3rem"} mt="10px">
                  Contadores que já possuem escritórios de contabilidade (não
                  importa o tamanho ou nicho);
                </ListItem>
                <ListItem lineHeight={"2.3rem"} mt="10px">
                  Profissionais do ramo que queiram empreender;
                </ListItem>
                <ListItem lineHeight={"2.3rem"} mt="10px">
                  Jovens que queiram ingressar no mercado contábil ou estão em
                  processo de sucessão familiar;
                </ListItem>
                <ListItem lineHeight={"2.3rem"} mt="10px">
                  Profissionais do mercado tradicional que queiram entender mais
                  de gestão de negócios (exemplos: advogados, médicos,
                  engenheiros, corretores de seguros, etc).
                </ListItem>
              </UnorderedList>
              Obs: Conhecimento, técnicas e ferramentas aplicáveis para todos os
              perfis acima.
            </Text>

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
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
