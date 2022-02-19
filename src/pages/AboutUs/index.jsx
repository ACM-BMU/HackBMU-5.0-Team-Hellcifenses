import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";

import LogoBombargain from "../../assets/img/logo-green.png";

import { Container } from "./styles";

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <h1>
          Hello, we are <img src={LogoBombargain} alt="Bombargain Logo" />
        </h1>
        <p>
          Bombargain is a project developed in HackBMU 5.0, by 4 people, being 3
          Brazilians and 1 Indian, we think of Mumbai, because there is local
          commerce, besides being a very captivating place for tourism.
        </p>
        <p>
          The name of the project came from mixing the words Bombay with
          bargain. Because Mumbai is our initial focus, but of course we intend
          to expand our project much further.
        </p>
        <p>
          We know that advertisements are boring, but it becomes something
          viable for us and for one of the main focuses of the project, which is
          the financial economy. We expect a lot of access from both locals and
          tourists who don't want to be fooled with abusive prices. And we will
          not need to charge fees for accessing our website.
        </p>
        <p>
          Our website also shows the current average price of things in the
          region, and tells you when is the best time to buy that fruit,
          vegetable, spice, or whatever you want by notifying you. It also shows
          when prices are above average or below.
        </p>
        <p>
          As we know Mumbai is the financial capital of India, so nothing better
          than doing a project that also aims to encourage financial savings.
          Spend responsibly and wisely.
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
