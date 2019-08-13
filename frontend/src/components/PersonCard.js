import React from 'react';

import './PersonCard.css'

function PersonCard ({ name, photo, email }) {
  return (
    <div className="card-content">
      <div className="img-div">
        <img src={`http://localhost:8000/files/${photo}`} alt="Profile" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>({email})</p>
      </div>
    </div>
  );
}

export default PersonCard;