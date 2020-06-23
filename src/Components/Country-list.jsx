import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  padding: 4em 2em;
`;

function CountryList() {
  const dispatch = useDispatch();
  //const countryList = useSelector((state) => state.countryList);
  const countryListByName = useSelector((state) => state.countryListByName);
  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  // const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        // setCountryList(list);
      })
      .catch(() => {
        console.log("Hubo un error con la petición");
      });
  }, [dispatch]);

  return (
    <CountryListStyled>
      {/* {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong> Not found in countries
        </p>
      )} */}
      {countryList.map(({ flag, name, capital, population, region }) => {
        return (
          <Country
            key={name}
            flag={flag}
            name={name}
            capital={capital}
            population={population}
            region={region}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
