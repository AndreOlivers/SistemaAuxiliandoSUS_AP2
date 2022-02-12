import axios from 'axios'

async function getUsuarios() {
    const response = await axios.get('https://localhost:44327/api/Usuarios')
    console.log(response.data);
}

function postUsuarios(nome, sobrenome, idade, email, cpf, senha, confirmarSenha, cidade) {
    axios.post('https://localhost:44327/api/Usuarios', {
        // email: data.email,
        // senha: data.senha
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        email: email,
        cpf: cpf,
        senha: senha,
        confimarSenha: confirmarSenha,
        cidade: cidade
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function putUsuarios() {
    
}

function deleteUsuarios(idUsuario) {
    const response = await axios.delete(`https://localhost:44327/api/Usuarios/${idUsuario}`)
    console.log(response.data);
}

export default { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios }