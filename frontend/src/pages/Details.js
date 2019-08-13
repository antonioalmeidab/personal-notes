import React, { Component } from 'react';
import api from '../services/api';

import './styles/Details.css';
import Header from '../components/Header';

class Details extends Component {
  person = this.props.location.state.person;

  state = {
    notes: this.person.notes,
    newNote: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.person.notes.push(this.state.newNote);
    this.setState({ notes: this.person.notes });

    this.setState({ newNote : '' });

    const data = new FormData();
    this.state.notes.map((note, index) => (
      data.append(`notes[${index}]`, note)
    ));

    await api.put(`people/${this.person._id}/addnote`, data);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="details">
          <div className="detail-card">
            <img src={`http://localhost:8000/files/${this.person.photo}`} alt="Personal pic" />
            <div className="person-info">

              <h2>{this.person.name}</h2>

              <h3>E-mail: </h3>
              <p>{this.person.email}</p>

              <h3>Descrição:</h3>
              <p>{this.person.description}</p>
            </div>
          </div>

          <div className="notes">
            <header>
              <h3>Anotações</h3>
              <form id="send-note" onSubmit={this.handleSubmit}>
                <textarea
                  placeholder="Adicionar nota"
                  name="newNote"
                  onChange={this.handleChange}
                  value={this.state.newNote}
                />
                <button type="submit">Adicionar nota</button>
              </form>
            </header>
            <div className="note-list">
              {this.state.notes.map((note, index) => (
                <article>
                  <p key={index}>{note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Details;