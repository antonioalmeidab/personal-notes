import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import add from '../assets/add.png';
import logout from '../assets/logout.png';
import back from '../assets/back.png';

function Header() {
 if (window.location.pathname === "/list") return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/"><img className="add" src={logout} alt="back"/></Link>
        <h1>PersonalNotes</h1>
        <Link to="/list/addNewPerson"><img className="add" src={add} alt="add"/></Link>
      </div>
    </header>
  );
  else return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/list"><img className="add" src={back} alt="back"/></Link>
        <h1>PersonalNotes</h1>
        <div></div>
      </div>
    </header>
  )
}

export default Header;