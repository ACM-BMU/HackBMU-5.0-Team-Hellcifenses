import { Header } from "../../components/Header/";

import Sacolas from "../../assets/img/sacola-de-compras.png";
import IllustrationCat from "../../assets/img/illustration-01.png";
import Cat from "../../assets/img/cat-02.png";
import Logo from "../../assets/img/logo.png";

import { Main, Container, Content } from "./styles";
import { Footer } from "../../components/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Main>
        <Container width="90%">
          <img src={Sacolas} alt="Shopping bag" />
          <Content>
            <p>Do you like to shop?</p>
            <p>But does money always run out fast?</p>
          </Content>
        </Container>

        <Container width="100%">
          <Content>
            <p>
              What if you had a place for you to compare prices from local
              shops, without leaving home?
            </p>
          </Content>
          <img
            src={IllustrationCat}
            className="illustration"
            alt="Illustration of one cat yellow and star yellow and ball blue"
          />
        </Container>

        <Container width="90%">
          <img src={Cat} alt="Shopping bag" />
          <Content>
            <img src={Logo} alt="Logo bombargain" />
            <p>
              Because bargaining is always better and still makes money at the
              end of the month.
            </p>
          </Content>
        </Container>
      </Main>

      <Footer />
    </>
  );
}

export default Homepage;
