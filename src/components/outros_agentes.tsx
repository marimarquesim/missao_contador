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
      pt={["5%", "5%", "1%"]}
      minH={["60vh", "100vh", "600px", "600px", "100vh", "50vh"]}
    >
      <Box
        mr={["5%", "5%", "10%"]}
        ml={["5%", "5%", "10%"]}
        display="grid"
        mt="3%"
      >
        <Heading
          fontFamily={"JosefinBold"}
          textAlign="center"
          color="white"
          fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "3vw"]}
          lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
          mb="15px"
        >
          MENTORES
        </Heading>

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
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "250px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "250px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/MARTINS.JPG"
            />
            <Text
              textAlign={"center"}
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.8vw",
              ]}
            >
              José Carlos Martins
            </Text>
            <Text
              color="white"
              fontSize={[
                "1rem",
                "1rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
            >
              Presidente
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Advogado com especialização em Direito do Trabalho graduado pela
              Pontifícia Universidade Católica de São Paulo (PUC-SP),
              Contabilista e Economista.
            </Text>
          </Box>

          <Box
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "250px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "250px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/CARLA.JPG"
            />
            <Text
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Carla Martins
            </Text>
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
            >
              Vice-Presidente
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["16px", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Graduada em Propaganda e Marketing pela Escola Superior de
              Propaganda e Marketing (ESPM), pós-graduada em Big Data e
              Marketing pela Universidade Anhembi Morumbi e Contabilista.
            </Text>
          </Box>

          <Box
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "250px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "250px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/alberto.jpeg"
            />
            <Text
              textAlign={"center"}
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.6rem",
              ]}
            >
              Alberto Corrêa Filho
            </Text>
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
            >
              Diretor Executivo
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["16px", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Advogado com especialização em Direito do Trabalho graduado pela
              ESA OABSP e Contabilista. Graduado em MBA em Controladoria e
              Gestão em Serviços Contábeis pela Universidade Presbiteriana
              Mackenzie.
            </Text>
          </Box>

          <Box
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/THIAGO.JPG"
            />
            <Text
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Thiago Herance
            </Text>
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
            >
              Diretor Executivo
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Advogado e Administrador graduado pela Universidade Paulista
              (UNIP) e Contabilista. MBA Executivo em Direito: Gestão e Business
              Law
            </Text>
          </Box>
          <Box
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/MARCELO.JPG"
            />
            <Text
              textAlign={"center"}
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Marcelo Lunetta
            </Text>
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
            >
              Gerente TI
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Graduado em Administração com ênfase em Logística pelo Centro
              Universitário das Faculdades Metropolitanas Unidas (FMU).
            </Text>
          </Box>
          <Box
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/VINICIUS.JPG"
            />
            <Text
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Vinicius Loprete
            </Text>
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
              textAlign="center"
            >
              Gerente Projetos e Qualidade
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Graduado em Administração de Empresas pela Pontifícia Universidade
              Católica de São Paulo (PUC-SP) e graduando em MBA de Business
              Process pela Fundação Getúlio Vargas (FGV-SP).
            </Text>
          </Box>

          <Box
            m="10px"
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              rounded="full"
              as="img"
              w={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              h={["120px", "150px", "250px", "250px", "250px", "13vw"]}
              src="assets/images/luiz.jpeg"
            />
            <Text
              fontFamily={"JosefinBold"}
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Luiz Ciampi
            </Text>
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.5rem",
              ]}
              textAlign="center"
            >
              Gerente Jurídico
            </Text>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1rem"]}
            >
              Advogado pós-graduado em Direito e Processo do Trabalho pela
              Escola Paulista de Direito (EPD) e pós-graduando em Direito
              Corporativo e Compliance pela Escola Paulista de Direito (EPD).
            </Text>
          </Box>
        </Carousel>
      </Box>

      <Box mr="10%" ml="10%" display="grid" mt="3%">
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
            marginLeft={"20px"}
            marginRight={"20px"}
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
