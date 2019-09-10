import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import petsList from '../../components/pets.json';
import st from './PetsPage.module.css';

class PetsPage extends Component {
  state = { petsList };

  render() {
    const { petsList } = this.state;

    return (
      <div>
        <h2 className={st.petsHeader}>Available pets</h2>
        <ul className={st.petsList}>
          {petsList.map(item => (
            <li key={item.id} className={st.petsItem}>
              <Link to={`/pets/${item.id}`}>
                <img
                  src={item.image}
                  alt={`pic of ${item.name} - ${item.breed} - ${item.gender}`}
                />
                <h3 className={st.petsName}>{item.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PetsPage;
