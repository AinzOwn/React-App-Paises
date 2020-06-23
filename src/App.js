import React from "react";
import "./App.css";
import CountryList from "./Components/Country-list";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Components/Reducer";
import ActionList from "./Components/Action-list";
import Header from "./Components/Header";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ActionList />
      <CountryList />
    </Provider>
  );
}

export default App;
