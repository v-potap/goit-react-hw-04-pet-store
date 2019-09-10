import React, { Component } from 'react';
import st from './PetPage.module.css';

import petsList from '../../components/pets.json';

export default class PetPage extends Component {
  render() {
    const { id } = this.props.match.params;

    const {
      name,
      age,
      gender,
      color,
      breed,
      image,
      description,
    } = petsList.find(pet => pet.id === id);

    const goBack = () => this.props.history.push('/pets');

    return (
      <div>
        <button onClick={goBack} className={st.returnButton}>
          &#8630; Return
        </button>
        <h2 className={st.petHeader}>All about {name}</h2>
        <div className={st.petInfo}>
          <img
            className={st.petImage}
            src={image}
            alt={`pic of ${name} - ${breed} - ${gender}`}
          />
          <ul className={st.petDescrList}>
            <li className={st.petDescrItem}>
              <h3 className={st.petDescrItemHeader}>Age</h3>
              <p className={st.petDescrItemText}>{age}</p>
            </li>
            <li className={st.petDescrItem}>
              <h3 className={st.petDescrItemHeader}>Gender</h3>
              <p className={st.petDescrItemText}>{gender}</p>
            </li>
            <li className={st.petDescrItem}>
              <h3 className={st.petDescrItemHeader}>Color</h3>
              <p className={st.petDescrItemText}>{color}</p>
            </li>
            <li className={st.petDescrItem}>
              <h3 className={st.petDescrItemHeader}>Breed</h3>
              <p className={st.petDescrItemText}>{breed}</p>
            </li>
          </ul>
        </div>
        <p className={st.paragraph}>{description}</p>
      </div>
    );
  }
}
