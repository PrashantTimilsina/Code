import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Head";
// import CountryCard from "./components/CountryCard";

const CountryCard = () => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCl-edaR4SQu75YCMrwxBToUO2jqoKGiV8Tw&s"
        alt="Country"
      />
      <h2>Prashant Timilsina</h2>
      <h3>Data</h3>
      <h4>Population</h4>
    </div>
  );
};
// const CountryCard =
//   () =>
//   ({ flags, name, languages, capital }) => {
//     return (
//       <div className="card">
//         <img src={flags.png} alt="Country" />
//         <h2>{name}</h2>
//         <h3>{languages}</h3>
//         <h4>{capital}</h4>
//       </div>
//     );
//   };
const List = () => {
  return (
    <>
      <div className="country-list">
        <CountryCard />
        <CountryCard />
        <CountryCard />

        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountryList(data);
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
      <List />
    </>
  );
};

const Footer = () => {
  return <h2>Footer</h2>;
};

const AppLayout = () => {
  return (
    <>
      <Head />
      <Body />

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
