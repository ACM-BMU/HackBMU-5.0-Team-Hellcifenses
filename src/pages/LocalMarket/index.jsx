import { useState, useEffect } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Megaphone from "../../assets/img/megaphone.svg";

import {
  SearchContainer,
  Search,
  Companies,
  Company,
  CompanyInfos,
  CompanyProducts,
  CompanyDescription,
} from "./styles";
import { Loading } from "../../components/Loading";

function LocalMarket() {
  const [getMarkets, setMarkets] = useState([]);

  useEffect(function () {
    fetch("https://run.mocky.io/v3/80c97e36-e86b-4a8c-9b7a-afb3c5b24ba5")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.companies);
        setMarkets([...response.companies]);
      });
  }, []);

  return (
    <>
      <Header />
      <SearchContainer>
        <div>
          <img src={Megaphone} alt="Megaphone icon" />
          <h1>A new bombastic offer for you</h1>
        </div>
        <Search>
          <input type="text" placeholder="search here"></input>
          <ion-icon name="search-outline"></ion-icon>
        </Search>
      </SearchContainer>

      {getMarkets.length === 0 ? (
        <Loading />
      ) : (
        <Companies>
          {getMarkets.map((item) => (
            <Company key={item.id}>
              <CompanyInfos>
                <img src={item.company_logo} alt={item.company_name} />
                <p>{item.company_slogan}</p>
                <strong>{item.company_name}</strong>
              </CompanyInfos>
              <CompanyDescription>
                {item.company_description}
              </CompanyDescription>

              <CompanyProducts>
                {item.products.map((elem) => (
                  <div key={elem.id}>
                    <img src={elem.product_image} alt={elem.product_name} />
                  </div>
                ))}
                <a href="#">More...</a>
              </CompanyProducts>
            </Company>
          ))}
        </Companies>
      )}

      <Footer />
    </>
  );
}

export default LocalMarket;
