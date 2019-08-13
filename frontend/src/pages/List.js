import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import './styles/List.css'

import PersonCard from '../components/PersonCard';
import Header from '../components/Header';


class List extends Component {
  state = {
    list: [],
    search: '',
    searchOption: "name"
  };

  async componentDidMount() {
    const response = await api.get('people');
    this.setState({ list: response.data });
  }

  handleSearchChange = e => {
    this.setState({ search: e.target.value.substr(0,20) });
  }

  render() {
    let fileterdList = this.state.list.filter((person) => {
      let nameResult = person.name.toLowerCase().indexOf(this.state.search.toLowerCase());
      let emailResult = person.email.toLowerCase().indexOf(this.state.search.toLowerCase());
      return (nameResult !== -1 || emailResult !== -1);
    });

    return (
      <div>
        <Header/>
        <div className="list">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Buscar"
              name="search"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>
          <ul>
            {fileterdList.map((person, index) => (
              <article key={index}>
                <Link to={{
                  pathname: `/list/${person._id}/details`,
                  state: { person: person },
                }}>
                  <PersonCard name={person.name} photo={person.photo} email={person.email} />
                </Link>
              </article>
            ))}
          </ul>
        </div>

      </div>
      
    );
  }
}

export default List;