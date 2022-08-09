import {
  Box,
  Text,
  Flex,
  Stack,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
  Icon,
} from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

export function Promotion() {
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      maxH={["1102px", "1120px", "1500px", "690px", "680px", "1300px"]}
      pb={["0%", "15%", "0.1%"]}
      pt={["2%", "15%", "3%", "2%"]}
      backgroundColor="black"
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
          direction={["column", "column", "column", "row"]}
        >
          <Flex
            textAlign={"left"}
            direction={"column"}
            w="100%"
            flex={1}
            alignItems="left"
            alignContent="left"
            justifyContent="left"
            justifyItems="left"
          >
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"}>
              Qual é o seu maior desafio?
            </Text>

            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Conquistar e vender para mais clientes?
            </Text>
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Sair do operacional e ter tempo para a estratégia do seu negócio?
            </Text>
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Fazer a gestão de times de alta performance?
            </Text>
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Implantar uma cultura proativa com seu time?
            </Text>
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Estabelecer processos eficazes na sua empresa?
            </Text>
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Saber inovar com a tecnologia?
            </Text>
            <Text fontSize="1.5rem" fontFamily={"JosefinRegular"} mt="15px">
              Ou investir em marketing digital com estratégia efetiva e retorno
              garantido?
            </Text>
          </Flex>
          <Flex
            flex={1}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
          >
            <Image
              alt="Jhonny"
              src="assets/images/MosaicoJhonny.png"
              w={["316px", "450px", "412px", "584px", "600px", "47vw", "30vw"]}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
