import { useState, useEffect } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Megaphone from "../../assets/img/megaphone.svg";

import {
  SearchContainer,
  Search,
  Products,
  Product,
  ProductContent,
  Span,
} from "./styles";

import { Loading } from "../../components/Loading/";

function Bargainspage() {
  const [getProducts, setProducts] = useState([]);

  const moedaInr = (valor) => {
    return valor.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  useEffect(function () {
    fetch("https://run.mocky.io/v3/64dec967-f2e6-40f3-afa8-0a150e1a83c1")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        return setProducts([...response.fruits]);
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

      {getProducts.length === 0 ? (
        <Loading />
      ) : (
        <Products>
          {getProducts.map((item) => {
            return (
              <Product key={item.id}>
                <img src={item.product_image} alt={item.product_name} />
                <ProductContent>
                  <strong>
                    {item.product_name}

                    <Span
                      customcolor={
                        item.product_price > item.product_average ? true : false
                      }
                    >
                      {moedaInr(item.product_price)}/{item.product_format}
                    </Span>
                  </strong>
                  <strong>
                    Average cost
                    <span>
                      {moedaInr(item.product_average)}/{item.product_format}
                    </span>
                  </strong>
                </ProductContent>
                <button type="button">More deals...</button>
              </Product>
            );
          })}
        </Products>
      )}

      <Footer />
    </>
  );
}

export default Bargainspage;
