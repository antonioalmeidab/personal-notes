import React, { Component } from 'react';
import api from '../services/api';

import Header from '../components/Header';
import './styles/AddForm.css';

class AddForm extends Component {
  state = {
    name: '',
    email: '',
    description: '',
    photo: null,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleSubmit = async e => {
    e.preventDefault();
    
    const data = new FormData();

    data.append('photo', this.state.image);
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('description', this.state.description);

    await api.post('people', data);

    this.props.history.push('/list');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="addform">
          <h2>Preencha com os dados da pessoa a ser adicionada</h2>
          <form id="new-person" onSubmit={this.handleSubmit}>
            <input className="text-input"
              type="text"
              name="name"
              placeholder="Nome"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
            <input className="text-input"
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
            <textarea
              name="description"
              placeholder="Descrição"
              onChange={this.handleChange}
              value={this.state.description}
              required
            />
            <input className="upload" type="file" onChange={this.handleImageChange} />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      
    );
  }
}

export default AddForm;