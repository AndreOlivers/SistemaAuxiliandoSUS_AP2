import React, {useState} from 'react';
import { Flex, Heading, Input, Button, Switch, FormLabel, FormControl, Stack, InputGroup, InputRightElement, Text  } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'


export default function FormLogin() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <Heading mb={4} textAlign="center">Login</Heading>

                <Stack spacing={5}>
                    <Input placeholder="Email" type="email"></Input>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Senha"
                        />

                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-alerts" mb="0">
                            Lembrar-Me
                        </FormLabel>
                        <Switch id="email-alerts" />
                    </FormControl>

                    {/* Alterar para click */}
                    <Text textAlign="center">Esqueceu a Senha?</Text>

                    <Button colorScheme="teal">Login</Button>
                </Stack>

            </Flex>
        </Flex >
    )
}