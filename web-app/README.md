constructor() {
    super();
    this.state = {
      nome: '',
      sobrenome: '',
      idade: '',
      email: '',
      cpf: '',
      senha: '',
      confirmSenha: '',
      // cidade: '',
      // estado: '',
      genero: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { nome, sobrenome, idade, cpf, senha, confirmSenha, genero } = this.state;
  }