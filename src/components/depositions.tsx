import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  AspectRatio,
  Text,
} from "@chakra-ui/react";

export function Depoimentos() {
  return (
    <Flex
      paddingX="7%"
      id="beneficios"
      direction="column"
      maxW="100%"
      minH={["100vh", "100vh", "1000px", "500px", "100vh", "50vh"]}
      pt={["8%", "8%", "5%", "1%", "1%", "2%"]}
      pb="5%"
      backgroundImage="url('assets/images/bg-video.svg')"
      backgroundPosition={["left", "left", "center"]}
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
      backgroundRepeat="no-repeat"
      display="flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
    >
      <Box
        display="flex"
        textAlign="center"
        alignContent="center"
        justifyContent="center"
      >
        <Heading
          pt={["3%", "3%", "3%"]}
          pb="1%"
          color="white"
          fontSize={["2.8rem", "2.8rem", "3.5rem", "4.5rem", "5.1vw"]}
          w={["300px", "auto", "700px", "800px", "90vw"]}
        >
          Depoimentos
        </Heading>
      </Box>
      <Box>
        <Box mt="30px">
          <Box
            as="video"
            width={["90vw", "90vw", "50vw"]}
            height="40%"
            controls
          >
            <Box
              w="100%"
              as="source"
              src="https://drive.google.com/drive/folders/1-Aq9A77bjl8M5wZN5V98dn9JxLqXMs1M"
              // type="video/mp4"
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
