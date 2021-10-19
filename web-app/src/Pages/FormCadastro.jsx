import React, { useState } from 'react';
import { Flex, Heading, Input, Stack, NumberInput, NumberInputField, InputGroup, InputRightElement, Button, Select } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
// ViewIcon, ViewOffIcon,
import instance from '../services/api';


class FormCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      idade: 0,
      email: '',
      cpf: '',
      senha: '',
      confirmSenha: '',
      // cidade: '',
      // estado: '',
      genero: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    instance.post('/Usuarios', {
      nome: 'Nicolas',
      sobrenome: 'Gomes',
      idade: 20,
      email: "nicolasgomes@gmail.com",
      cpf: "123456",
      senha: "1234",
      confirmarsenha: "1234",
      cidade: 'Texto'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });


    event.preventDefault();
  }

  render() {
    return (
      <Flex height="auto" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={5}>
          <Heading mb={2} textAlign="center">Cadastro</Heading>
          <Stack spacing={2}>

            <Input
              name="nome"
              placeholder="Nome"
              type="text"
              value={this.state.nome}
              onChange={this.handleInputChange}
            />

            <Input
              name="sobrenome"
              placeholder="Sobrenome"
              type="text"
              value={this.state.sobrenome}
              onChange={this.handleInputChange}
            />

            <NumberInput>
              <NumberInputField
                name="idade"
                placeholder="Idade"
                type="number"
                value={this.state.idade}
                onChange={this.handleInputChange}
              />
            </NumberInput>

            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />

            <Input
              name="cpf"
              placeholder="CPF"
              type="number"
              value={this.state.cpf}
              onChange={this.handleInputChange}
            />


            {/* Input de Senha & Confirmação da senha */}
            <InputGroup size="md">
              <Input
                name="senha"
                pr="4.5rem"
                type="password"
                value={this.state.senha}
                onChange={this.handleInputChange}
                // type={show ? "text" : "password"}
                placeholder="Senha"
              />

              <InputRightElement width="4.5rem">
                {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button> */}
              </InputRightElement>
            </InputGroup>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="confirmSenha"
                type="password"
                value={this.state.confirmSenha}
                onChange={this.handleInputChange}
                // type={show ? "text" : "password"}
                placeholder="Confirme sua Senha"
              />
            </InputGroup>
            {/* ====================== */}

            <Select placeholder="Cidade" icon={<ChevronDownIcon />}>
              {/* Trazer a lista de cidades apartir do link do git no trello */}
              <option value="option1">Lista de Cidades...</option>
            </Select>

            <Select placeholder="Estado" icon={<ChevronDownIcon />}>
              {/* Trazer a lista de estado apartir do link do git no trello */}
              <option value="option1">Lista de Estado...</option>
            </Select>

            <Select placeholder="Gênero" icon={<ChevronDownIcon />}>
              <option value="option1">Feminino</option>
              <option value="option2">Masculino</option>
              <option value="option3">Não-Binário</option>
            </Select>

            <Button onClick={this.handleSubmit} colorScheme="teal">Enviar</Button>
          </Stack>
        </Flex>
      </Flex>
    );
  }
}
export default FormCadastro;






// export default function Login() {
//   const [show, setShow] = useState(false)
//   const handleClick = () => setShow(!show)

//   const [value, setValue] = React.useState("")
//   const handleChange = (event) => setValue(event.target.value)

//   return (
//     <Flex height="100vh" alignItems="center" justifyContent="center">
//       <Flex direction="column" background="gray.100" p={12} rounded={6}>
//         <Heading mb={2} textAlign="center">Cadastro</Heading>
//         <Stack spacing={2}>
//           <p>{value}</p>
//           <Input placeholder="Nome" value={value} onChange={handleChange}></Input>
//           <Input placeholder="Sobrenome"></Input>

//           <NumberInput min={1} max={100}>
//             <NumberInputField placeholder="Idade" />
//           </NumberInput>

//           <Input placeholder="Email" type="email"></Input>


//           {/* Input de Senha & Confirmação da senha */}
//           <InputGroup size="md">
//             <Input
//               pr="4.5rem"
//               type={show ? "text" : "password"}
//               placeholder="Senha"
//             />

//             <InputRightElement width="4.5rem">
//               <Button h="1.75rem" size="sm" onClick={handleClick}>
//                 {show ? <ViewIcon /> : <ViewOffIcon />}
//               </Button>
//             </InputRightElement>
//           </InputGroup>

//           <InputGroup size="md">
//             <Input
//               pr="4.5rem"
//               type={show ? "text" : "password"}
//               placeholder="Confirme sua Senha"
//             />
//           </InputGroup>
//           {/* ====================== */}

//           <Select placeholder="Cidade" icon={<ChevronDownIcon />}>
//             {/* Trazer a lista de cidades apartir do link do git no trello */}
//             <option value="option1">Lista de Cidades...</option>  
//           </Select>

//           <Select placeholder="Estado" icon={<ChevronDownIcon />}>
//             {/* Trazer a lista de estado apartir do link do git no trello */}
//             <option value="option1">Lista de Estado...</option>  
//           </Select>

//           <Select placeholder="Gênero" icon={<ChevronDownIcon />}>
//             <option value="option1">Feminino</option>
//             <option value="option2">Masculino</option>
//             <option value="option3">Não-Binário</option>
//           </Select>

//           <Button colorScheme="teal">Enviar</Button>
//         </Stack>
//       </Flex>
//     </Flex>
//   );
// }

// Nome
// Sobrenome
// Idade
// Email
// CPF
// Senha
// ConfirmaSenha
// Cidade - DropDown
// Estado
// Genero - DropDown