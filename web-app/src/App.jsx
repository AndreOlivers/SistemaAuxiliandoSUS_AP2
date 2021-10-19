import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home  from './Pages/Home';
import FormCadastro from './Pages/FormCadastro';
import FormLogin from './Pages/FormLogin';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Cadastro' component={FormCadastro} />
        <Route path='/Login' component={FormLogin} />
      </Layout>
    );
  }
}
