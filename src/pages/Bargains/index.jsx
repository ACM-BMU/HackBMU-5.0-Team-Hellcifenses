import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

import Megaphone from "../../assets/img/megaphone.svg";
import ImgFruits from "../../assets/img/image-fruits.jfif";
import ImgTecidos from "../../assets/img/image-tecidos.jpg";
import ImageSapatos from "../../assets/img/image-sapatos.jfif";
import ImageDecoracaoCasa from "../../assets/img/image-decoracao-casa.jfif";

import { Main, Wrapper, SearchContainer, Search } from "./styles";

function Bargains() {
  return (
    <>
      <Header />
      <SearchContainer>
        <div>
          <img src={Megaphone} />
          <h1>A new bombastic offer for you</h1>
        </div>
        <Search>
          <input type="text" placeholder="search here"></input>
          <ion-icon name="search-outline"></ion-icon>
        </Search>
      </SearchContainer>
      <Main>
        <section>
          <h2>Foods</h2>

          <Wrapper>
            <Link to="./fruits">
              <img src={ImgFruits} />
              <button type="button">Fruits</button>
            </Link>

            <Link to="#">
              <img src={ImgFruits} />
              <button type="button">Vegetables</button>
            </Link>

            <Link to="#">
              <img src={ImgFruits} />
              <button type="button">Spices</button>
            </Link>
          </Wrapper>
        </section>

        <section>
          <h2>House Parts</h2>

          <Wrapper>
            <Link to="#">
              <img src={ImgTecidos} />
              <button type="button">Fabrics</button>
            </Link>

            <Link to="#">
              <img src={ImgTecidos} />
              <button type="button">Cushions</button>
            </Link>

            <Link to="#">
              <img src={ImgTecidos} />
              <button type="button">Upholstery</button>
            </Link>
          </Wrapper>
        </section>

        <section>
          <h2>Clothing</h2>

          <Wrapper>
            <Link to="#">
              <img src={ImageSapatos} />
              <button type="button">Clothes</button>
            </Link>

            <Link to="#">
              <img src={ImageSapatos} />
              <button type="button">Shoes</button>
            </Link>

            <Link to="#">
              <img src={ImageSapatos} />
              <button type="button">Bags</button>
            </Link>
          </Wrapper>
        </section>

        <section>
          <h2>Decoration House</h2>

          <Wrapper>
            <Link to="#">
              <img src={ImageDecoracaoCasa} />
              <button type="button">Furniture</button>
            </Link>

            <Link to="#">
              <img src={ImageDecoracaoCasa} />
              <button type="button">Rugs</button>
            </Link>

            <Link to="#">
              <img src={ImageDecoracaoCasa} />
              <button type="button">Curtains</button>
            </Link>
          </Wrapper>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Bargains;
