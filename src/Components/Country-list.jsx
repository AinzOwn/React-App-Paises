import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
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
    <Wrapper>
      <CountryListStyled>
        {/* {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong> Not found in countries
        </p>
      )} */}
        {countryList.map(
          ({
            flag,
            name,
            capital,
            population,
            region,
            nativeName,
            alpha2Code,
          }) => {
            return (
              <Country
                key={name}
                flag={flag}
                name={name}
                capital={capital}
                population={population}
                region={region}
                nativeName={nativeName}
                alpha2Code={alpha2Code}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
