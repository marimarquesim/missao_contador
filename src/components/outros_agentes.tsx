import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Heading, Text } from "@chakra-ui/react";

export function OutrosAgentes() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {
        max: 4000,
        min: 3000,
      },
      items: 4,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
    },
    tablet: {
      breakpoint: {
        max: 1050,
        min: 464,
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 0.5,
    },
  };

  return (
    <Box
      id="clientes"
      backgroundImage="url('assets/images/bg-video.svg')"
      backgroundPosition={["left", "left", "center"]}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
      display="flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
      pb="5%"
      pt="5%"
      minH={["60vh", "100vh", "600px", "600px", "100vh", "50vh"]}
    >
      <Box mr="10%" ml="10%" display="grid" mt="1%">
        <Box
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
          display="flex"
          mb="80px"
        >
          <Heading
            fontFamily={"JosefinBold"}
            textAlign="center"
            color="white"
            fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "3vw"]}
            lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
          >
            Outros agentes secretos se juntaram nessa missão
            <br />
            Quem são eles?
          </Heading>
        </Box>

        <Carousel
          focusOnSelect={true}
          centerMode={true}
          infinite={true}
          responsive={responsive}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          afterChange={function (previousSlide, _ref) {}}
          slidesToSlide={1}
        >
          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              justifyItems="center"
              alignContent={"center"}
              alignItems="center"
            >
              <Box display={"flex"} flexDirection="column" mr="10px">
                <Box
                  src="assets/images/agente1.JPG"
                  as="img"
                  // src="assets/images/agente1.JPG"
                  w={["100%", "100%", "150px", "150px", "150px", "13vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Rogério Fameli
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"}>
                CEO do ABS Group
              </Text>
            </Box>
          </Box>

          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente2.png"
                  w={["100%", "100%", "150px", "150px", "150px", "14vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Altair Alves
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                CEO da Soluzione Contábil
              </Text>
            </Box>
          </Box>
          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente3.JPG"
                  w={["100%", "100%", "150px", "150px", "150px", "13.5vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Pedro Nery
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                CEO da Contabilidade.net
              </Text>
            </Box>
          </Box>
          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente4.jpeg"
                  w={["100%", "100%", "150px", "150px", "150px", "15vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Leandro Bueno
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                CEO da SÃO LUCAS ASSESSORIA CONTÁBIL
              </Text>
            </Box>
          </Box>
          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente5.png"
                  w={["100%", "100%", "150px", "150px", "150px", "14vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Robson Cavalcanti
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                CEO da WISECONT Contabilidade Inteligente
              </Text>
            </Box>
          </Box>
          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente6.jpg"
                  w={["100%", "100%", "150px", "150px", "150px", "17vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Lucas Correa
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                Sócio da RSM Brasil
              </Text>
            </Box>
          </Box>
          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente7.jpg"
                  w={["100%", "100%", "150px", "150px", "150px", "15vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="24px" mt="5px">
                  Anderson Hernandes
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                Fundador e CEO da Tactus Contabilidade Digital
              </Text>
            </Box>
          </Box>

          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente8.jpg"
                  w={["100%", "100%", "150px", "150px", "150px", "15vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Anderson Souza
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                Apresentador do programa Fecha Conta
              </Text>
            </Box>
          </Box>

          <Box
            margin={"20px"}
            display={"flex"}
            flexDirection="column"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
            textAlign={["center", "center", "center"]}
          >
            <Box>
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                justifyItems="center"
                alignContent={"center"}
                alignItems="center"
              >
                <Box
                  as="img"
                  src="assets/images/agente9.jpg"
                  w={["100%", "100%", "150px", "150px", "150px", "13vw"]}
                />
                <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                  Whill Silva
                </Text>
              </Box>
              <Text fontSize="23px" lineHeight={"30px"} maxW="100%">
                {" "}
                CEO da TJ Company que engloba a rede de Joalherias e Ópticas
                Tri-Jóia
              </Text>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}
