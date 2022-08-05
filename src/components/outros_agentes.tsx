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
      items: 2,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 2,
    },
    tablet: {
      breakpoint: {
        max: 1050,
        min: 464,
      },
      items: 1,
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
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="23px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente1.jpg"
                    w={["150px", "150px", "150px", "150px", "150px", "12vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                    Rogério Fameli
                  </Text>
                </Box>
                Fundador do Abertura Simples e CEO do ABS Group. Sócio e
                Investidor de diversos escritórios contábeis. Idealizador do
                Projeto Contador CEO. Especialista em Crescimento Contábil.
                Formado em Ciências Contábeis pela PUC/SP e com mais de 20 anos
                de experiência no mercado financeiro. Criador da primeira e
                única plataforma de crescimento para contadores: a ABS Growth
                com mais de 500 parceiros em todo o Brasil.
              </Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="23px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente2.png"
                    w={["150px", "150px", "150px", "150px", "150px", "13vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                    Altair Alves
                  </Text>
                </Box>
                Altair Alves é contador, empresário contábil e CEO da Soluzione
                Contábil, idealizador e aprendentador do canal Gerando
                Empreendedores que é o maior canal do segmento no Youtube
                Brasil, idealizador do treinamento Rei do MEI e sócio de três
                empresas no segmento financeiro e empreserial, todas idealizadas
                para apoio aos empreendedores.
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="23px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente3.jpg"
                    w={["150px", "150px", "150px", "150px", "150px", "12vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                    Pedro Nery
                  </Text>
                </Box>
                Pedro Nery, CEO da Contabilidade.net, a rede de Contadores
                Consultores do Brasil, e criador do @ContabilidadeConsultiva, o
                maior canal de diferenciação para contadores, com mais de 70 mil
                seguidores nas redes sociais. Especialista em Gestão Empresarial
                pela Fundação Getulio Vargas e professor de pós-graduação. Ele
                acredita que os contadores podem ser os agentes de transformação
                das empresas, assegurando a conformidade legal e implantando
                boas práticas de gestão, através da Contabilidade Consultiva.
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            mt={"20px"}
            mb={"20px"}
            mr="30px"
            w="100%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="20px" lineHeight={"27px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente4.jpeg"
                    w={["150px", "150px", "150px", "150px", "150px", "12vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="25px" mt="5px">
                    Leandro Bueno
                  </Text>
                </Box>
                Atuo há 28 anos no mercado contábil, dos quais 20 á frente da
                SÃO LUCAS ASSESSORIA CONTÁBIL. Já converti mais de 2.000
                contratos, de MEI a S/A Formado em ciências contábeis em 2005
                pelo IESA, Técnico em 1997 pela Anchieta. Pós graduado pela FGV
                , fiz pós graduação na FGV em Gestão de Negócios. Professor de
                Pós Graduação na BSSP. Já ministrei mais de 500 palestras (para
                contadores e empresários) ao longo de 20 anos de empresa. Já
                treinei mais de 200 funcionários durante toda a história da São
                Lucas. Hoje estou à frente da: São Lucas Assessoria Contábil.
                Santo Tributo Recuperação Tributária Manda Pro Financeiro
                Terceirização do financeiro. Escola da Vida Contábil. Educação
                continuada para contadores e clientes. Diretor Tesoureiro da
                entidade sem fins lucrativos Creche São Jerônimo que cuida de
                mais de 150 crianças em vulnerabilidade. Possuo Canal no YouTube
                com mais de 700 mil views Instagram com mais de 100 mil
                impressões mensais.
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="23px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente5.png"
                    w={["150px", "150px", "150px", "150px", "150px", "13vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="23px" mt="5px">
                    Robson Cavalcanti
                  </Text>
                </Box>
                Robson é empresário contábil e CEO da WISECONT Contabilidade
                Inteligente, especialista em marketing digital. Ele acredita que
                o contador é protagonista e princiapl agente de transformação do
                empreendedorismo Nacional. Já compartilhou conhecimento com mais
                de 1.000 (mil) contadores em todo o Brasil através de cursos,
                palestras e mentorias, visando ajudar empreendedores contábeis
                de todo Brasil a multiplicar o seu propósito de transformar a
                vida das empresa em nosso país como embaixador da Conta Azul.
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="23px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente6.jpg"
                    w={["150px", "150px", "150px", "150px", "150px", "13vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="23px" mt="5px">
                    Lucas Correa
                  </Text>
                </Box>
                Lucas Corrêa é Sócio da RSM Brasil, que é a 6 maior empresa de
                Contabilidade e Auditoria do Brasil e do Mundo, focado nos
                clientes do middle market. E também investidor de startups.
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="20px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente7.jpg"
                    w={["150px", "150px", "150px", "150px", "150px", "13vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="21px" mt="5px">
                    Anderson Hernandes
                  </Text>
                </Box>
                É fundador e CEO da Tactus Contabilidade Digital, tendo 27 anos
                de experiência em negócios contábeis. É autor de 11 livros e
                mais de mil eventos realizados. Possui formação em
                contabilidade, marketing e gestão de negócios. Em 2015 pivotou
                sua contabilidade tradicional para o digital e conquistou mais
                de 3 mil clientes com um time de cerca de 90 profissionais.
              </Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="20px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente8.jpg"
                    w={["150px", "150px", "150px", "150px", "150px", "13vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="22px" mt="5px">
                    Anderson Souza
                  </Text>
                </Box>
                Com mais de 20 anos de experiência na área tributária, criador
                do canal do Café Tributário, articulista do Portal Contábeis,
                apresentador do programa Fecha Conta, fundador das empresas Arte
                Fiscal Consultoria Tributária e Equilíbrio Contábil, já
                recuperou mais de 400 milhões de reais em créditos tributários e
                formou mais de 2000 alunos em seus treinamentos de Recuperação
                Tributária.
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            color={"white"}
            padding={"10px"}
            borderRadius="5px"
            margin={"20px"}
            w="90%"
            backgroundColor="rgb(0 , 0, 0, 0.8)"
          >
            <Box>
              <Text fontSize="20px" lineHeight={"30px"}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  float={"left"}
                  mr="10px"
                >
                  <Box
                    as="img"
                    src="assets/images/agente9.jpg"
                    w={["150px", "150px", "150px", "150px", "150px", "12vw"]}
                  />
                  <Text fontFamily={"JosefinBold"} fontSize="23px" mt="5px">
                    Whill Silva
                  </Text>
                </Box>
                Whill Silva é CEO da TJ Company que engloba a rede de Joalherias
                e Ópticas Tri-Jóia (@trijoiadigital) e as marcas de Joias
                Exclusivas Whill Silva e Andy Carraro. Founder e Diretor
                Criativo ​da Coolture: um Hub de Criatividade e Soluções para
                Empresas que engloba a CooltureX – Assessoria e Mentoria em
                Costumer Experience e Coolture Social Creative – agência de
                Marketing 360º All Costumer. Embaixador Sul do @g4club_, Whill
                construiu sua trajetória indo de vendedor à CEO através de um
                propósito claro: proporcionar experiências extraordinárias e
                construir legado através das suas empresas, negócios e
                parceiros.
              </Text>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}
