import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  margin: 1em;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ flag, name, capital, population, region }) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt="Bandera" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
