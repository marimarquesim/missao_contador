import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Heading, Text } from '@chakra-ui/react'


export function Clientes() {
    const responsive = {
        superLargeDesktop: { // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 3
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1050,
                min: 464
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 0.5
        }
    };

    return (
        <Box id="clientes" backgroundImage="url('assets/images/bg_header.svg')" backgroundSize="cover" backgroundPosition="center"
            backgroundAttachment={
                [
                    'initial',
                    'initial',
                    'initial',
                    'inherit',
                    "fixed"
                ]
            }
            display="flex"
            alignContent="center"
            justifyContent="center"
            alignItems='center'
            justifyItems='center'
            flexDirection="column"
            pb="5%"
            pt="5%"
            minH={
                [
                    "60vh",
                    '100vh',
                    '600px',
                    '600px',
                    "100vh"
                ]
            }>

            <Box alignContent="center" justifyContent="center" alignItems='center' justifyItems='center' display="flex">
                <Heading textAlign="center" color="white" fontSize="3rem">
                    Alguns Clientes
                </Heading>
            </Box>

            <Box mr="10%" ml="10%" display="grid" backgroundColor='rgba(255,255,255,0.66)' mt="5%">
                <Box justifyContent="center" alignItems="center" display="flex" color='rgba(255,255,255,0.2)'>
                    <Heading textAlign="center" color='transparent' fontSize="0.01rem">
                        .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </Heading>
                </Box>

                <Carousel focusOnSelect={true}
                    centerMode={true}
                    infinite={true}
                    responsive={responsive}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={
                        ["tablet", "mobile"]
                    }
                    afterChange={
                        function (previousSlide, _ref) { }
                    }
                    slidesToSlide={1}>

                    <Box as="img" src="assets/images/marca_Bradesco.png" w="150px" />

                    <Box as="img" w="150px" src="assets/images/marca_XP.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Primo.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Kopenhagen.webp" />

                    <Box as="img" w="150px" src="assets/images/marca_Sorridents.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Mundial.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Farmais.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Diniz.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Justwater.webp" />

                    <Box as="img" w="150px" src="assets/images/marca_Loggi.png" />

                    <Box as="img" w="150px" src="assets/images/marca_gestao.png" />

                    <Box as="img" w="150px" src="assets/images/marca_Jovens.png" />

                </Carousel>
            </Box>

            <Box mr="10%" ml="10%" display="grid" mt="5%">
                <Box justifyContent="center" alignItems="center" display="flex">
                    <Heading textAlign="center" color='transparent' fontSize="0.01rem">
                        .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </Heading>
                </Box>

                <Carousel focusOnSelect={true}
                    centerMode={true}
                    infinite={true}
                    responsive={responsive}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={
                        ["tablet", "mobile"]
                    }
                    afterChange={
                        function (previousSlide, _ref) { }
                    }
                    slidesToSlide={1}>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/primo.png" />
                        <Text color="white">
                            Primo Rico
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/perrucho.png" />
                        <Text color="white">
                            Breno Perrucho
                        </Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/g4.png" />
                        <Text color="white">
                            Gestão 4.0
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/hyeser.png" />
                        <Text color="white">
                            Hyeser
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/davi.png" />
                        <Text color="white">
                            David Braga
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/thiago.png" />
                        <Text color="white">
                            Tiago T-Car
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/rob.png" />
                        <Text color="white">
                            Rob Correa
                        </Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/wilou.png" />
                        <Text color="white">
                            Willou e Watson
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/frederico.png" />
                        <Text color="white">
                            Frederico Flores
                        </Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/bruno.png" />
                        <Text color="white">
                            Bruno Perini
                        </Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/ana.png" />
                        <Text color="white">
                            Ana Jords
                        </Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/joel.png" />
                        <Text color="white">
                            Joel Jota
                        </Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignContent="center" alignItems="center">
                        <Box as="img" w="250px" src="assets/images/ivan.png" />
                        <Text color="white">
                            Ivan Moré
                        </Text>
                    </Box>


                </Carousel>
            </Box>


        </Box>


    );
}
