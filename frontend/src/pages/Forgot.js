import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

import './styles/Login.css';


class Login extends Component {
  state = {
    username: '',
    errorMessage: '',
    tip: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    try{
      const response = await api.get(`authentication/${this.state.username}/forgotPassword`);
      this.setState({ tip: `Dica: ${response.data.passwordTip}`})
      this.setState({ errorMessage: '' })
    } catch(err) {
      this.setState( { errorMessage: 'Usuário inválido!' } )
    }
  }

  render() {
    return (
      <div className="login-box">
          <form id="login" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <p>{this.state.tip}</p>
            <p className="error" >{this.state.errorMessage}</p>

            <button type="submit">Receber dica</button>
            <Link className="forgot" to="/">Voltar</Link>

          </form>
      </div>
    );
  }
}

export default Login;