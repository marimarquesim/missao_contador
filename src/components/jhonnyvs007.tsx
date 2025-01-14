import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

export function JhonnyVSJ1() {
  return (
    <Flex
      id="jhonnyvs007"
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      maxH={["1448px", "1090px", "1040px", "1341px", "160vh"]}
      pb={["0%", "15%", "0"]}
      pt={["5%", "15%", "3%", "2%"]}
      backgroundImage="url('assets/images/bg_jhonny00j.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment={["initial", "initial", "initial", "left", "fixed"]}
    >
      <Box mt="1%" w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column", "column", "row"]}
          paddingX="5%"
        >
          <Stack
            direction="column"
            flex="2"
            pb="2%"
            display="flex"
            alignItems="center"
            alignContent="center"
            color="white"
            fontSize="24px"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box
              display="flex"
              flexDirection={["column", "row"]}
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              justifyItems="center"
            >
              <Heading
                fontSize={[
                  "3.5rem",
                  "3.5rem",
                  "3.5rem",
                  "3.5rem",
                  "3.5rem",
                  "3.2vw",
                ]}
              >
                Jhonny
                <br />
                Contador
              </Heading>
              <Heading
                fontSize={["3rem", "3rem", "3rem", "3rem", "3rem", "3vw"]}
                color="red"
                ml="5%"
              >
                VS
              </Heading>
              <Heading
                fontSize={["3.5rem", "7rem", "7rem", "7rem", "7rem", "7vw"]}
                ml="5%"
              >
                00J
              </Heading>
            </Box>
            <Box
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.7vw",
              ]}
              lineHeight={["20px", "20px", "20px", "20px", "20px", "2vw"]}
              w={["85%"]}
              pb="2%"
              pt="2%"
            >
              <Text>
                O renomado agente secreto 00J encara uma das missões mais
                desafiadoras de sua vida.
              </Text>
              <Text mt="1%">
                Em Missão Contador, 00J precisa localizar e impedir que Jhonny
                Contador revele seus segredos de gestão de negócios que fizeram
                com que sua empresa crescesse mais de 1.200% nos últimos anos.
              </Text>
              <Text mt="1%">
                Jhonny na figura de 00J representa o que ocorreu com sua empresa
                desde o início de sua jornada até os dias atuais.
              </Text>
              <Text mt="1%">
                Já o Jhonny Contador percebeu que a maior forma de multiplicar é
                dividindo conhecimento e decidiu colocar tudo o que aprendeu ao
                longo de 20 anos de experiência nessa imersão podendo você ter
                acesso à esses segredos.
              </Text>
            </Box>
            <Box
              mt="0%"
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                spacing={1}
                h="100%"
                color="white"
                display="flex"
                direction={["column", "column", "column", "row"]}
                paddingX="4%"
              >
                <Stack
                  direction="column"
                  flex="1"
                  paddingX={["2%", "0", "5%", "5%"]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  justifyItems="center"
                  alignContent="center"
                  textAlign={["center", "center", "center", "left"]}
                >
                  <AspectRatio
                    w={["320px", "320px", "320px", "560px", "33vw"]}
                    h={["200px", "200px", "200px", "310px", "15.9vw"]}
                    ratio={1}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/psypPGAXAv0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </AspectRatio>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Flex
            direction="column"
            flex="1"
            display="flex"
            justifyContent="end"
            alignItems={["end", "center", "center", "center", "start"]}
            justifyItems="end"
            alignContent={["end", "center", "center", "center", "start"]}
          >
            <Box
              mt={["2%", "3%", "1%", "1%", "-4%"]}
              display="flex"
              justifyContent="end"
              alignItems={["end", "center", "center", "center", "start"]}
              justifyItems="end"
              alignContent={["end", "center", "center", "center", "start"]}
            >
              <Image
                alt="Jhonny"
                src="assets/images/jhonny_00j.png"
                maxW={[
                  "316px",
                  "386px",
                  "357px",
                  "584px",
                  "600px",
                  "47vw",
                  "30vw",
                ]}
                minW={[
                  "316px",
                  "386px",
                  "357px",
                  "584px",
                  "600px",
                  "600px",
                  "155%",
                ]}
              />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}
