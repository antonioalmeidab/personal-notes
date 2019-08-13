import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

import './styles/Login.css';


class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('candidateUser', this.state.username);
    data.append('candidatePassword', this.state.password);

    try{
      await api.post('authentication', data);

      this.props.history.push('/list');
  
    } catch(err) {
      this.setState( { errorMessage: 'Usuário ou senha inválidos!' } )
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

            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={this.handleChange}
              value={this.state.password}
            />

            <p className="error" >{this.state.errorMessage}</p>

            <Link className="forgot" to="/">Esqueci a senha</Link>
            <button type="submit"></button>

          </form>
      </div>
    );
  }
}

export default Login;